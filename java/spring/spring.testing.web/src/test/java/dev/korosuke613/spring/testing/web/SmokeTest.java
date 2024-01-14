package dev.korosuke613.spring.testing.web;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SmokeTest {

    @Autowired
    private HelloController controller;

    @Test
    void contextLoads() {
        assertThat(controller).isNotNull();
    }
}
