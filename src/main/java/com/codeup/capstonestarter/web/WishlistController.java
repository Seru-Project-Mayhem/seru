package com.codeup.capstonestarter.web;


import com.codeup.capstonestarter.data.user.UsersRepository;
import com.codeup.capstonestarter.data.wishlist.Wishlist;
import com.codeup.capstonestarter.data.wishlist.WishlistRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    private void createWishlist(@RequestBody Wishlist newWishlist, OAuth2Authentication auth){
        wishlistRepository.save(newWishlist);
        System.out.println("Hello");
    }

}
