import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const GOOG_API_KEY = 'AIzaSyBjl0NQBlQC0LpXSvwEqGS_dqOdULie_NE';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

   state = {
      reviews: [],
      search: '',
   }

   URL = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`
      + `&key=${GOOG_API_KEY}`;

   getSearchMovieReviews() {
      fetch(URL).then(response => response.json()).then(reviews => this.setState({ reviews }))
   }
   componentDidMount() {
      this.getSearchMovieReviews()
   }
   handleSearch(e) {
      this.setState({ search: e.search.value })
   }
   render() {
      const { search } = this.state
      const { handleSearch } = this
      return (
         <div className='searchable-movie-reviews'>
            <input
               type='text'
               name='search'
               value={search}
               onChange={(e) => handleSearch(e)}
               placeholder='search movie review'
            >
            </input>
         </div>
      );
   }
}

export default SearchableMovieReviewsContainer;