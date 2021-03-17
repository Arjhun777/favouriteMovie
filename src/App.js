import React from 'react';
import MovieForm from './movieForm';
import ListMovies from './listMovies';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formDetails: {
                movieName: '',
                ratings: '',
                duration: ''
            },
            movieList: [],
            searchText: '',
            searchResult: []
        }
    }

    handleSubmit = () => {
        let { formDetails, movieList } = this.state;
        if (formDetails.ratings.length && formDetails.duration.length && formDetails.movieName.length) {
            movieList.push(formDetails);
            formDetails = {
                movieName: '',
                ratings: '',
                duration: ''
            }
            movieList = this.sortMovieList(movieList);
            this.setState({ formDetails, movieList });
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        let { formDetails } = this.state;
        formDetails[name] = value;
        this.setState({
            formDetails
        })
    }

    onSearchChange = (event) => {
        const { value } = event.target;
        let { searchText, movieList, searchResult } = this.state;
        searchResult = [];
        this.setState({ searchText: value, searchResult }, () => {
            if (value.length >= 2) {
                movieList.forEach(detail => {
                    if (detail.movieName.includes(value)) {
                        searchResult.push(detail);
                    }
                });
                searchResult = this.sortMovieList(searchResult);
                this.setState({ searchResult });
            }
        });
    }

    sortMovieList = (movieList=[]) => {
        let newList = [];
        const sortedList = new Array(movieList.length).fill(null);
        movieList.map((detail, index) => {
            const duration = this.getDuration(detail.duration);
            newList.push(duration);
        });
        newList = newList.sort((a, b) => b-a);
        movieList.map((data) => {
            const duration = this.getDuration(data.duration);
            const newIndex = newList.indexOf(duration)
            if (newIndex >= 0) {
                if (sortedList[newIndex] === null) sortedList[newIndex] = data;
                else sortedList[newIndex+1] = data;
            }
        })
        return sortedList;
    }

    getDuration = (duration) => {
        let currentTime = null;
        if (duration.includes('h')) {
            currentTime = parseInt(duration) * 60;
        } else {
            currentTime = parseInt(duration)
        }
        return currentTime
    }

    render() {
        const { movieList, searchResult, searchText, formDetails } = this.state;
        const isSearch = searchText.length >= 2;
        return (
            <div>
                <MovieForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} formDetails={formDetails} />
                <p for="search-input">Search</p>
                <input id="search-input" onChange={this.onSearchChange} value={searchText}/>
                <ListMovies movieList={isSearch ? searchResult : movieList}/>
            </div>
         )
    }

}


export default App;