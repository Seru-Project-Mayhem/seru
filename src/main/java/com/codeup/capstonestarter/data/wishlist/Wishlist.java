package com.codeup.capstonestarter.data.wishlist;

import com.codeup.capstonestarter.data.games.Game;
import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name="wishlist")
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlistID;

    private boolean isActive;

    @ElementCollection
//    @ManyToMany(reviews
//            fetch = FetchType.LAZY,
//            cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH},
//            targetEntity = Game.class)
//    @JoinTable(
//            name = "wishlist_games",
//            joinColumns = {@JoinColumn(name = "wishlist_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name = "game_id", nullable = false, updatable = false)},
//            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
//            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
//    )
    private List<Long> gameID;

    @OneToOne(mappedBy = "wishlist")
    @JsonBackReference
    @JsonIgnoreProperties("wishlist")
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
