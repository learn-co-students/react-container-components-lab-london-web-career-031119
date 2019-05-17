import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${'aqBJTzIgoyTCG8ADXQssAo8XviAAymG6'}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = { 
        searchTerm: '', 
        reviews: []
    }

    handleSearchInput = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmitSearch = (e) => {
        e.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(reviews => this.setState({reviews: reviews.results}))

    }



    render() { 
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmitSearch}>
                    <label htmlFor="search-input">Search Reviews</label>
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.handleSearchInput}

                    />
                    <button type="submit">Search</button>

                </form>
                {typeof this.state.reviews === 'object' &&
                this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />            
            </div>
          );
    }
}
 
export default SearchableMovieReviewsContainer
