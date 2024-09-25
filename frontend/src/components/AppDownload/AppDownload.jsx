import React, { useState, useEffect } from 'react';
import "./Reviews.css";

// Sample reviews data (normally this would be in a separate JSON file)
import { reviewsData } from '../../assets/reviews';

const AppDownload = () => {
  const [displayedReviews, setDisplayedReviews] = useState([]);

  useEffect(() => {
    const rotateReviews = () => {
      const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
      setDisplayedReviews(shuffled.slice(0, 3));
    };

    rotateReviews();
    const interval = setInterval(rotateReviews, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <div className="review-cards">
        {displayedReviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>
            <p className="rating">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppDownload;