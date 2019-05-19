import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
   + `api-key=${GOOG_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

   state = {
      reviews: [],
   }
   getMovieReviews() {
      fetch(URL).then(response => response.json()).then(reviews => this.setState({ reviews }))
   }
   componentDidMount() {
      this.getMovieReviews()
   }
   render() {
      return (<div className='latest-movie-reviews'>
         {this.state.reviews}
         {this.state.reviews.map(review => <MovieReviews review={review} />)}
      </div>);
   }
}

export default LatestMovieReviewsContainer;
