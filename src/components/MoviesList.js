import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export const MoviesList=class extends Component {
    static propTypes={
        movies:PropTypes.array
    }

    render() {
        const {movies}=this.props;

        return (
            <div className="MoviesList">
                {
                    movies.map((movie, index)=>{
                        return (
                        <div key={movie.imdbID+index} className="MoviesList-item">
                            <Movie
                                poster={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}
                                id={movie.imdbID}
                                url={`https://www.imdb.com/title/${movie.imdbID}`}
                                />
                        </div>
                        )
                    })

                }


            </div>
        )
    }
}
