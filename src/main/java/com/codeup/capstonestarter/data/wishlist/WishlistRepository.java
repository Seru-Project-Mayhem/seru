package com.codeup.capstonestarter.data.wishlist;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {


    Wishlist findByUserUserID (Long userID);



}
