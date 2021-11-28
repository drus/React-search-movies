import React, { Component } from 'react'
import {APIKEY, SERVICE} from '../config'
import { SearchHistory } from './SearchHistory'



export const SearchForm=class extends Component {

    state={inputMovie:'', searchTerm:''}

    /* constructor(props){
        super(props)
        this.state.searchHistory=window.localStorage.getItem('searchHistory').split(',');
    } */

    componentDidMount(){
        //console.log("mounted", !this.state.inputMovie, this.refs.input.value);
        /* setTimeout(() => {
            if(!this.state.inputMovie && !!this.refs.input.value){
                this.setState({inputMovie:this.refs.input.value});
            }
        }, 1000); */
        
    }

    _forceSearch=(e)=>{
        const title=e.target.innerText;
        this.refs.input.value=title;
        this.setState({
            inputMovie:title,
            searchTerm:title
        });
    }


    _handleChange=(e)=>{
        this.setState({
            inputMovie:e.target.value,
            //searchTerm:''
        });

    };

    shouldComponentUpdate(props){
        return this.state.searchTerm!=='';
    }


    _handleForm=(e)=>{
        e.preventDefault();
        const inputMovie=this.state.inputMovie;
        if(!inputMovie.length) return false;
        
        fetch(`${SERVICE}?apikey=${APIKEY}&s=${inputMovie}`)
        .then(res=>res.json())
        .then(results=>{
            const {Search=[], totalResults='0'}=results;
            console.log({Search, totalResults});
            if(totalResults>0){
                this.setState({searchTerm:inputMovie});
                console.log("searchTerm update", this.state.searchTerm);
            }
            this.props.onResults(Search);
        });
    };



    render(){
        console.log("render", this.state.searchTerm);
        return (
            <form onSubmit={this._handleForm}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                         onChange={this._handleChange}
                        ref="input"
                        className="input"
                        type="text"
                        placeholder="Find a movie" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>

                <SearchHistory searchTerm={this.state.searchTerm} onTitleClick={this._forceSearch} />
                
            </form>
        )
    }
}
