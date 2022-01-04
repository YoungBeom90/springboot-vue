package com.vue.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VueController {
    @GetMapping(value = "/vue")
    public String vue() {
        return "vue/index";
    }
}
