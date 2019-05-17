import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import data from './test-reviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: '',
  };

  handleChange = event => {
    this.setState( { searchTerm: event.target.value } )
  }

  handleSubmit = () => {
    // event.preventDefault();
    // const searchTerm = `${event.target.searchTerm.value}`
    // console.log(searchTerm)
    // this.setState( { searchTerm: searchTerm } )
    fetch(URL + "&query=" + this.state.searchTerm)
      .then(resp => resp.json())
      .catch(this.setState( { reviews: data } ))
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit} className="search-terms">
          <input type="search" name="searchTerm" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  };
};

export default SearchableMovieReviewsContainer;