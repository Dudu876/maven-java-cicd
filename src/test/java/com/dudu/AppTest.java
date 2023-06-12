package com.dudu;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest {
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue() {
        App app = new App();
        assertTrue(app.isOdd(5));
        assertFalse(app.isOdd(6));
    }
}
