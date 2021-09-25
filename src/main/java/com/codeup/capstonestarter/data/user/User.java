package com.codeup.capstonestarter.data.user;

import com.codeup.capstonestarter.data.review.Review;
import com.codeup.capstonestarter.data.wishlist.Wishlist;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Collection;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @Column(nullable = false)
    private String username;

    @Email
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.USER;

    public enum Role {USER, ADMIN};

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Collection<Review> reviews;

    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="wishlistID", referencedColumnName = "wishlistID")
    @JsonManagedReference
    private Wishlist wishlist;

    public User(Long user_ID, String username, String email, String password, Role role, Collection<Review> reviews, Wishlist wishlist) {
        this.userID = user_ID;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.reviews = reviews;
        this.wishlist = wishlist;
    }

    public User(String username) {
        this.username = username;
    }

    public User() {
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
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
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Wishlist getWishlist() {
        return wishlist;
    }

    public void setWishlist(Wishlist wishlist) {
        this.wishlist = wishlist;
    }

    public Collection<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Collection<Review> reviews) {
        this.reviews = reviews;
    }
}
