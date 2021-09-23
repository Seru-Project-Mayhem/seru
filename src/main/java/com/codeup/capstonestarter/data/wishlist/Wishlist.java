package com.codeup.capstonestarter.data.wishlist;

import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.mapping.Collection;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="wishlist")
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlistID;

    private boolean isActive;

    @ElementCollection
    private List<Long> gameID;

    @OneToOne(mappedBy = "wishlist")
//    @JsonIgnoreProperties({"wishlist", "password", "reviews"})
    @JsonBackReference
    private User user;

    public Wishlist() {}

    public Wishlist(Long wishlistID, boolean isActive, List<Long> gameID, User user) {
        this.wishlistID = wishlistID;
        this.isActive = isActive;
        this.gameID = gameID;
        this.user = user;
    }

    public Long getWishlistID() {
        return wishlistID;
    }

    public void setWishlistID(Long wishlistID) {
        this.wishlistID = wishlistID;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public List<Long> getGameID() {
        return gameID;
    }

    public void setGameID(List<Long> gameID) {
        this.gameID = gameID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
