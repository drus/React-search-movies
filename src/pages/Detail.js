import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {APIKEY, SERVICE} from '../config'
import {Title as PageTitle} from '../components/Title'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const Detail=class extends Component {

    static propTypes={
        match:PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })
    }

    state={
        movie:{
            Title:'',
            Poster:'',
            Actors:'',
            Metascore:'',
            Plot:''
        }
    }

    _fetchMovie({id}){
        
        fetch(`${SERVICE}?apikey=${APIKEY}&i=${id}`)
        .then(res=>res.json())
        .then(movie=>{
            console.log(movie);
            this.setState({movie});
        });
    }

    componentDidMount(){
        console.log("this.props", this.props);
        const {movieId}=this.props.match.params;
        this._fetchMovie({id:movieId});
    }


    render() {
        const {Title, Poster, Actors, Metascore, Plot}=this.state.movie;
        return (
            <div className={this.state.movie.Poster ? 'Detail Detail--active' : 'Detail'}>
                <PageTitle>{Title}</PageTitle>
                <img src={Poster} alt="{Title} poster" />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
                <ButtonBackToHome />
                
            </div>
        )
    }
}
