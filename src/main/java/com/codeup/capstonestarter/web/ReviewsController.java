package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.rating.Rating;
import com.codeup.capstonestarter.data.rating.RatingRepository;
import com.codeup.capstonestarter.data.review.Review;
import com.codeup.capstonestarter.data.review.ReviewRepository;
import com.codeup.capstonestarter.data.user.UsersRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/review", headers = "Accept=application/json",
        produces = "application/json")
public class ReviewsController {

    private final ReviewRepository reviewRepository;

    private final UsersRepository usersRepository;

    public ReviewsController(ReviewRepository reviewRespository, UsersRepository usersRepository) {
        this.reviewRepository = reviewRespository;
        this.usersRepository = usersRepository;
    }

    @PostMapping
    private void createReview(@RequestBody Review newReview, OAuth2Authentication auth){
        reviewRepository.save(newReview);
    }
}
