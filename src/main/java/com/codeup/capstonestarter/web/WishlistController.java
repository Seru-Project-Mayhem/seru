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

    public WishlistController(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    @PostMapping
    private void createWishlist(@RequestBody Wishlist newWishlist){
        wishlistRepository.save(newWishlist);
    }

    @GetMapping
    private List<Wishlist> getWishlists() {
        return wishlistRepository.findAll();
    }

    @GetMapping("{id}")
    private Wishlist getWishlistById(@PathVariable Long id){
        return wishlistRepository.findById(id).get();
    }

    @DeleteMapping("{id}")
    private void deleteWishlistItem(@PathVariable Long id){
        wishlistRepository.deleteById(id);
    }





}
