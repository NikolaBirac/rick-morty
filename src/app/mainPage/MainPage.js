import React from 'react';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import charactersService from '../../services/dataService';
import dataService from '../../services/dataService';
import { CardView } from './CardView';
import { Loading } from '../partials/Loading';
import { Bookmark } from './Bookmark';
import { SomethingWentWrong } from '../partials/SomethingWentWrong';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersArray: null,
            currentPage: 1,
            bookmarkArray: [],
            showLoading: true,
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

    changeCurrentPage = pageNum => {
        this.loadCharacters(pageNum);
        this.setState({ currentPage: pageNum });
        localStorage.setItem("currentPage", JSON.stringify(pageNum));
    };

    render() {
        return (
            <div>
                {this.state.error ? <SomethingWentWrong /> : (
                        <div className="container">
                            {this.state.showLoading ? <Loading /> : (
                                    <div>
                                        <Bookmark characters={this.state.bookmarkArray} handleBookmark={this.handleBookmark}/>
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