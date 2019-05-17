import React from 'react';

function MovieReviews(props) {
  return (
    <div className="review-list">
      {props.reviews && props.reviews.map(review => 
        <div className="review" key={review.display_title}>
          {review.display_title}
        </div> 
      )}
    </div>
  );
};

export default MovieReviews;