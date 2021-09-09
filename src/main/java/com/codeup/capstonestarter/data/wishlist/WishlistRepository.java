package com.codeup.capstonestarter.data.wishlist;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {

    // Not sure if JpaRepository should be Boolean...given that I only have two
    // private variables in my Wishlist.java it can be a placeholder for the time being.




}
