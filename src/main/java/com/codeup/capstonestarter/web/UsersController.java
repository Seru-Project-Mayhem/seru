package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UsersRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/api/users", headers = "Accept=application/json", produces = "application/json")
public class UsersController {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    public UsersController(UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/create")
    public void createUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        usersRepository.save(user);
    }

    @GetMapping("/findByEmail")
    private User findByEmail(@RequestParam String email){
        System.out.println("E-mail: " + email);
        return usersRepository.findByEmail(email).get();
    }

    @GetMapping("/findById")
    private User findById(@RequestParam Long id){
        return usersRepository.findById(id).get();
    }

    @GetMapping
    private List<User> getUsers(){
        return usersRepository.findAll();
}

    @GetMapping("/authUser")
    private User getAuthenticatedUser(OAuth2Authentication auth){
        return usersRepository.findByEmail(auth.getName()).get();
    }

}
