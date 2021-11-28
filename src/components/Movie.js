import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const Movie=class extends Component {

    static propTypes={
        id:PropTypes.string,
        title:PropTypes.string,
        year:PropTypes.string,
        poster:PropTypes.string
    };

    render() {
        const {id, poster, title, year, url}=this.props;

        return (
            <div className="card">

                <Link to={`/detail/${id}`} className="card-image">
                    <figure className="image">
                        <img
                            src={poster==='N/A' ? 'default-image.jpg' : poster}
                            alt={title || ''}
                        />
                    </figure>
                </Link>

                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{title || ''}</p>
                        <p className="subtitle is-6">
                            {year || ''}
                            <small> <a href={url}>[IMDb]</a> </small>
                        </p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
