package korosuke613.callApi;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalcTest {

    @Test
    void sum() {
        assertEquals(3, Calc.sum(1, 2));
    }
}
