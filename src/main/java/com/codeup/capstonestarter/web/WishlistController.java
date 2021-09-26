package com.codeup.capstonestarter.web;


import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UsersRepository;
import com.codeup.capstonestarter.data.wishlist.Wishlist;
import com.codeup.capstonestarter.data.wishlist.WishlistRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "/api/wishlist", headers = "Accept=application/json",
        produces = "application/json")
public class WishlistController {

    private final WishlistRepository wishlistRepository;

    private final UsersRepository usersRepository;

    public WishlistController(WishlistRepository wishlistRepository, UsersRepository usersRepository) {
        this.wishlistRepository = wishlistRepository;
        this.usersRepository = usersRepository;
    }

    @PostMapping
    private void createWishlist(@RequestBody Wishlist newWishlist){

        User user = usersRepository.findById(newWishlist.getUser().getId()).get();

        if(user.getWishlist() != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already has a wishlist");

        }

        Wishlist wishlist = wishlistRepository.save(newWishlist);
        user.setWishlist(wishlist);
        usersRepository.save(user);
    }

    @GetMapping
    private List<Wishlist> getWishlists() {
        return wishlistRepository.findAll();
    }

    @GetMapping("{userID}")
    private Wishlist getWishlistByUserID(@PathVariable Long userID){
        return usersRepository.findById(userID).get().getWishlist();
    }

    @PutMapping
    private void update(@RequestBody Wishlist wishlist){

        wishlistRepository.save(wishlist);

    }





}
