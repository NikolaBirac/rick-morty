import React from 'react';
import charactersService from '../../services/dataService';
import { CardView } from './CardView';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import {Loading} from '../partials/Loading';
import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersArray: null,
            currentPage: 1
        }
    }
    
    loadCharacters(pageNumber) {
        charactersService.getCharacters(pageNumber)
            .then(characters => {
                this.setState({
                    charactersArray: characters.characters,
                    pagesNumber: characters.pagesNumber
                });
            });
    }

    componentDidMount() {
        this.loadCharacters();
    }   

    changeCurrentPage = numPage => {
        this.loadCharacters(numPage);
        this.setState({ currentPage: numPage });
    };

    // loadCharacterDetails(id) {
    //     ///
    // }

    render() {
        return (
            <div className="container">
                {!this.state.charactersArray ? <Loading /> : 
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