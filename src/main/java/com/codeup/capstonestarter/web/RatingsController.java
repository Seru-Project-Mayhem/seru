package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.rating.Rating;
import com.codeup.capstonestarter.data.rating.RatingRepository;
import com.codeup.capstonestarter.data.user.UsersRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/ratings", headers = "Accept=application/json",
        produces = "application/json")
public class RatingsController {

    private final RatingRepository ratingRespository;

    private final UsersRepository usersRepository;

    public RatingsController(RatingRepository ratingRespository, UsersRepository usersRepository) {
        this.ratingRespository = ratingRespository;
        this.usersRepository = usersRepository;
    }

    @PostMapping
    private void createRating(@RequestBody Rating newRating,
                              OAuth2Authentication auth){
        ratingRespository.save(newRating);
    }
}
