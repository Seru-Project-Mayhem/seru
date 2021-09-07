package com.codeup.capstonestarter.data.user;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long User_ID;

    @Column(nullable = false)
    private String username;

    @Email
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String Password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.USER;

    public enum Role {USER, ADMIN};

    public User(Long user_ID, String username, String email, String password, Role role) {
        this.User_ID = user_ID;
        this.username = username;
        this.email = email;
        this.Password = password;
        this.role = role;
    }

    public User(String username) {
        this.username = username;
    }

    public User() {
    }

    public Long getUser_ID() {
        return User_ID;
    }

    public void setUser_ID(Long user_ID) {
        this.User_ID = user_ID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        this.Password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
