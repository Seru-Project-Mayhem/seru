package com.codeup.capstonestarter.data.wishlist;

import javax.persistence.*;

@Entity
@Table(name="wishlist")
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlist_id;

    private boolean is_active;

    public Wishlist() {}

    public Wishlist(Long wishlist_id, boolean is_active) {
        this.wishlist_id = wishlist_id;
        this.is_active = is_active;
    }

    public Long getWishlist_id() {
        return wishlist_id;
    }

    public void setWishlist_id(Long wishlist_id) {
        this.wishlist_id = wishlist_id;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }
}
