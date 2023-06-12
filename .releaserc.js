module.exports = {
    // https://github.com/semantic-release/semantic-release/blob/master/docs/extending/plugins-list.md
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "conventionalcommits",
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
            },
        ],
        [
            "@semantic-release/exec",
            {
                "publishCmd": "./mvnw -B -U -ntp -DskipTests -Drevision=${nextRelease.version} deploy"
            }
        ],
        [
            "@semantic-release/github",
            {
                successComment:
                    ":tada: This ${issue.pull_request ? 'pull request' : 'issue'} is included in [version ${nextRelease.version}](${releases.filter(release => /github.com/i.test(release.url))[0].url}) :tada:",
                assets: ["target/*.jar"],
            },
        ],
    ],
    // scripts: {
    //   postversion: "cp -r package.json .. && cp -r npm-shrinkwrap.json .."
    // },
    tagFormat: "${version}",
    branches: [{ name: "release" }],
};
