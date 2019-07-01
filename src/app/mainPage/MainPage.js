import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import charactersService from '../../services/dataService';
import { CardView } from './CardView';
import { Loading } from '../partials/Loading';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersArray: null,
            currentPage: 1,
            showLoading: true
        }
    }
    
    loadCharacters(pageNumber) {
        charactersService.getCharacters(pageNumber)
            .then(characters => {
                this.setState({
                    charactersArray: characters.characters,
                    pagesNumber: characters.pagesNumber,
                    showLoading: false
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

    changeCurrentPage = pageNum => {
        this.loadCharacters(pageNum);
        this.setState({ currentPage: pageNum });
        localStorage.setItem("currentPage", JSON.stringify(pageNum));
    };

    render() {
        return (
            <div className="container">
                {this.state.showLoading ? <Loading /> : 
                    <div>
                        <div className="characters-content">
                            {this.state.charactersArray.map((character, i) => {
                                return (
                                    <Link to={"/character/" + character.id} key={i} className="card">
                                        <CardView character={character} ></CardView>
                                    </Link>
                                )
                            }) }
                        </div>
        
                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={this.state.pagesNumber}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="square-i"
                        />
                    </div>
                }
            </div>
        )
    }
}