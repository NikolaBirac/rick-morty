import React from 'react';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import charactersService from '../../services/dataService';
import dataService from '../../services/dataService';
import { CardView } from './CardView';
import { Loading } from '../partials/Loading';
import { SomethingWentWrong } from '../partials/SomethingWentWrong';
import { Bookmark } from './Bookmark';
import { Filter } from '../partials/Filter';
// import dataService from '../../services/dataService';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersArray: null,
            currentPage: 1,
            bookmarkArray: [],
            showLoading: true,
            filters: [],
            error: false
        }
    }
    
    loadCharacters(pageNumber) {
        charactersService.getCharacters(pageNumber)
            .then(characters => {
                this.setState({
                    charactersArray: characters.characters,
                    pagesNumber: characters.pagesNumber,
                    showLoading: false,
                    error: false
                });
                let bookmarkedCharacters = dataService.getBookmarkedCharacters();
                this.setState({
                    bookmarkArray: bookmarkedCharacters
                });
            })
            .catch(() => {
                this.setState({
                    error: true
                });
            });
    }

    componentDidMount() {
        let currentPage = JSON.parse(localStorage.getItem("currentPage"));
        if (currentPage) {
            this.loadCharacters(currentPage);
            this.setState({
                currentPage: currentPage
            })
        } else {
            this.loadCharacters();
        }
    }   

    handleBookmark = (character) => {        
        character.bookmarkState = !character.bookmarkState;
        let bookmarkedCharacters = dataService.getBookmarkedCharacters();
        let removed = false;
    
        // remove character from bookmark array
        for (let i = 0; i < bookmarkedCharacters.length; i++) {
            if (character.id === bookmarkedCharacters[i].id) {
                bookmarkedCharacters.splice(i, 1);
                removed = true;
                break;
            }
        }
        
        // add character in bookmark array
        if (!removed) {
            bookmarkedCharacters.push(character);
        }
        localStorage.setItem("bookmarkedCharacters", JSON.stringify(bookmarkedCharacters));
    
        // change character bookmark property in state
        let charactersArray = this.state.charactersArray;
        for (let i = 0; i < charactersArray.length; i++) {
            if (character.id === charactersArray[i].id) {
                charactersArray[i].bookmarkState = character.bookmarkState;
                break;
            }
        }
    
        this.setState({
            charactersArray: charactersArray,
            bookmarkArray: bookmarkedCharacters
        });
    }

    filterCharacters = (filter,value) => {
        let filters = [];

        if (this.state.filters.length >= 1) {  
            filters = [...this.state.filters];
            const sameFilter = filters.find(el => el.filter === filter);

            if (sameFilter) {
                filters.map(el => el.filter === filter ? el.value = value : "");
            } else {
                filters.push({filter, value});
            }
        } else {
            filters = [...this.state.filters];
            filters.push({filter, value});
        }
                
        charactersService.filterCharacters(filters)
            .then(characters => {
                this.setState({
                    charactersArray: characters.characters,
                    showLoading: false,
                    error: false,
                    filters: filters,
                    pagesNumber: characters.pagesNumber
                });
                let bookmarkedCharacters = dataService.getBookmarkedCharacters();
                this.setState({
                    bookmarkArray: bookmarkedCharacters
                });
            })
            .catch(() => {
                this.setState({
                    error: true
                });
            });
    }

    removeFilter = (filter) => {
        // const filters = this.state.filters.filter( el => el.filter !== filter);
        // charactersService.filterCharacters(filters)
        //     .then(characters => {
        //         this.setState({
        //             charactersArray: characters.characters,
        //             showLoading: false,
        //             error: false,
        //             filters: filters,
        //             pagesNumber: characters.pagesNumber
        //         });
        //         let bookmarkedCharacters = dataService.getBookmarkedCharacters();
        //         this.setState({
        //             bookmarkArray: bookmarkedCharacters
        //         });
        //     })
        //     .catch(() => {
        //         this.setState({
        //             error: true
        //         });
        //     });
    }

    changeCurrentPage = pageNum => {
        this.loadCharacters(pageNum);
        this.setState({ currentPage: pageNum, showLoading: true });
        localStorage.setItem("currentPage", JSON.stringify(pageNum));
    };

    render() {
        return (
            <div>
                {this.state.error ? <SomethingWentWrong /> : (
                        <div className="container">
                            {this.state.showLoading ? <Loading /> : (
                                    <div>
                                        <div className="toolbar">
                                            <Filter filterCharacters={this.filterCharacters} filters={this.state.filters} removeFilter={this.removeFilter}/>
                                            <Bookmark characters={this.state.bookmarkArray} handleBookmark={this.handleBookmark}/>
                                        </div>
                                        <div className="characters-content">
                                            {this.state.charactersArray.map((character, i) => {
                                                return (
                                                    <CardView key={i} handleBookmark={this.handleBookmark} character={character} ></CardView>
                                                )
                                            }) }
                                        </div>
                        
                                        <Pagination
                                            currentPage={this.state.currentPage}
                                            totalPages={this.state.pagesNumber}
                                            changeCurrentPage={this.changeCurrentPage}
                                            theme="square-fill"
                                        />
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}