package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UsersRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    @PreAuthorize("!hasAuthority('USER') || (#oldPassword != null && !#oldPassword.isEmpty())")
    public void createUser(@RequestBody User user){

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        usersRepository.save(user);

    }

    @PostMapping("/findByEmail")
    private User findByEmail(@RequestParam String email){
        System.out.println("E-mail: " + email);
        return usersRepository.findByEmail(email).get();
    }

@GetMapping
    private List<User> getUsers(){
        return usersRepository.findAll();
}

}
