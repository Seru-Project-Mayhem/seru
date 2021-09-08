package com.codeup.capstonestarter.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/home", "/login", "/register", "/freetoplay", "/0to10", "/10to20", "/20to30"})
    public String showView(){
        return "forward:/index.html";
    }
}
