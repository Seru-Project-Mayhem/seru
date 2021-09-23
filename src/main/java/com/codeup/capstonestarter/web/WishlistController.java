package com.codeup.capstonestarter.web;


import com.codeup.capstonestarter.data.user.UsersRepository;
import com.codeup.capstonestarter.data.wishlist.Wishlist;
import com.codeup.capstonestarter.data.wishlist.WishlistRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

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
        wishlistRepository.save(newWishlist);
    }

    @GetMapping
    private List<Wishlist> getWishlists() {
        return wishlistRepository.findAll();
    }

    @GetMapping("{wishlistID}")
    private Wishlist getWishlistById(@PathVariable Long wishlistID){
        return wishlistRepository.findById(wishlistID).get();
    }

    @DeleteMapping("{wishlistID}")
    private void deleteWishlistItem(@PathVariable Long wishlistID){
        wishlistRepository.deleteById(wishlistID);
    }





}
