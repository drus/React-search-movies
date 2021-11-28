import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const SearchHistory=class extends Component {
    
    static propTypes={
        searchTerm:PropTypes.string
    }

    state={
        searchHistory:[]
    }

    constructor(props){
        super(props);
        const localSearchHistory=window.localStorage.getItem('searchHistory');
        if(localSearchHistory && localSearchHistory.length){
            this.state={searchHistory:localSearchHistory.split(',')}
        }
    }

    shouldComponentUpdate(props){
        return props.searchTerm!=='';
    }

    componentDidUpdate(props){
        //console.log("props", props);
        let searchHistory=[...this.state.searchHistory];
        if(searchHistory.length>5) searchHistory.shift();

        if(!!props.searchTerm && !searchHistory.includes(props.searchTerm)){
            searchHistory.push(props.searchTerm);
            this.setState({searchHistory:searchHistory});
            localStorage.setItem('searchHistory', searchHistory)
        }
    }

    _paintSearchHistory(){
        return this.state.searchHistory.map(entry=>{
            return <button key={entry} onClick={this.props.onTitleClick}>{entry}</button>
        })
    }

    _clearSearchHistory=(e)=>{
        localStorage.setItem('searchHistory', []);
        this.setState({searchHistory:[]});
    }

    render() {
        console.log("history render", this.state.searchTerm);
        let visible=`${this.state.searchHistory.length ? 'SearchHistory SearchHistory--active' : 'SearchHistory'}`;
        return (
            <div className={visible}>
                {this._paintSearchHistory()}
                <button onClick={this._clearSearchHistory}>×</button>
            </div>
        )
    }
}
