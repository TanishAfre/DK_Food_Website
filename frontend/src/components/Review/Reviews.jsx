import React, { useState, useEffect } from 'react';
import "./Reviews.css";

// Sample reviews data (normally this would be in a separate JSON file)
//import { reviewsData } from '../../assets/reviews';
const reviewsData = [
  { id: 1, name: "John Doe", rating: 4, comment: "Great phone collections. Provides bills and warranty" },
  { id: 2, name: "Jane Smith", rating: 5, comment: "Good quality phone accessaries." },
  { id: 3, name: "Mike Johnson", rating: 3, comment: "Good, but could be better." },
  { id: 4, name: "Emily Brown", rating: 4, comment: "Very satisfied with my purchase." },
  { id: 5, name: "Alex Lee", rating: 5, comment: "Outstanding experience overall! Repaired my phone and is working perfectly fine." },
  { id: 6, name: "Sarah Wilson", rating: 4, comment: "Great customer service." }
];

const Reviews = () => {
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const rotateReviews = () => {
      setFade(false); // Trigger fade-out
      
      setTimeout(() => {
        const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
        setDisplayedReviews(shuffled.slice(0, 3));
        setFade(true); // Trigger fade-in
      }, 500); // Wait for fade-out to complete
    };

    rotateReviews(); // Initial rotation
    const interval = setInterval(rotateReviews, 15000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <div className={`review-cards ${fade ? 'fade-in' : 'fade-out'}`}>
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

export default Reviews;