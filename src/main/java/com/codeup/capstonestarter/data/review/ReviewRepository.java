package com.codeup.capstonestarter.data.review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ReviewRepository extends JpaRepository<Review, Long> {

    Optional<Review> findByUserId(Long userId);
}
