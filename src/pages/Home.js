import React, { Component } from 'react'
import {Title} from '../components/Title.js';
import {SearchForm} from '../components/SearchForm.js';
import { MoviesList } from '../components/MoviesList';

export const Home=class extends Component {

     
  state={results:[], usedSearch:false}
  
  _handleResults=(results)=>{
    this.setState({results, usedSearch:true});

  }

  _renderResults=()=>{
    return this.state.results.length===0
      ? <p>No results for this term <span role="img" aria-label="sad face">😕</span></p>
      : <MoviesList movies={this.state.results}/>
      
  }


    render() {
        return (
            <div>
                <div className="App">
                <Title>Search Movies</Title>

        
                    <div className="searchform-wrapper">
                    <SearchForm onResults={this._handleResults} />
                    </div>

                    {
                    this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the search to find a movie</small>
                    }
            
                </div>
                
            </div>
        )
    }
}
