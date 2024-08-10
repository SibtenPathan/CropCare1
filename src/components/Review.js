import React, { useState } from 'react';
import './Review.css';

const Review = () => {
  const [review, setReview] = useState({
    name: '',
    date: '',
    rating: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // e.g., send the data to a server or process it in some way.
    console.log('Review submitted:', review);
    // Reset form
    setReview({
      name: '',
      date: '',
      rating: '',
      text: '',
    });
  };

  return (
    <div className="review-container">
      <section className="review-section">
        <div className="review-form-container">
          <h2 className="review-title">Submit Your Review</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="review-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={review.name}
                onChange={handleChange}
                required
                className="review-input"
              />
            </div>
            <div className="review-form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={review.date}
                onChange={handleChange}
                required
                className="review-input"
              />
            </div>
            <div className="review-form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={review.rating}
                onChange={handleChange}
                placeholder="e.g., ⭐⭐⭐⭐⭐"
                required
                className="review-input"
              />
            </div>
            <div className="review-form-group">
              <label htmlFor="text">Review</label>
              <textarea
                id="text"
                name="text"
                value={review.text}
                onChange={handleChange}
                rows="4"
                required
                className="review-textarea"
              ></textarea>
            </div>
            <button type="submit" className="review-submit-btn">Submit Review</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Review;
