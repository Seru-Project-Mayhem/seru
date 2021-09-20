package com.codeup.capstonestarter.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class ViewController {

    @Value("${rapidApi_token}")
    private String rapidApiToken;

    @RequestMapping({"/", "/home", "/login", "/register", "/freetoplay", "/review", "/user",
            "/browse"})
    public String showView(){
        return "forward:/index.html";
    }

    @RequestMapping(path = "/js/keys.js", produces = "application/javascript")
    @ResponseBody
    public String getKeys(){
        return String.format("export let rapidApi_token = `%s`", rapidApiToken);

    }
}
