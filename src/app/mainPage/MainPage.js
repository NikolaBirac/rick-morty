import React from 'react';
import charactersService from '../../services/dataService';
import { CardView } from './CardView';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersArray: [],
            currentPage: 1
        }
    }
    
    loadCharacters(pageNumber) {
        charactersService.getCharacters(pageNumber)
            .then(characters => {

                this.setState({
                    charactersArray: characters
                })
                
            })
    }

    componentDidMount() {
        this.loadCharacters();
    }   

    changeCurrentPage = numPage => {
        this.loadCharacters(numPage);
        
        this.setState({ currentPage: numPage });
        //fetch a data
        //or update a query to get data
      };

    render() {
        return (
            <div className="container">
                <div className="characters-content">
                    {this.state.charactersArray.map((character, i) => {
                        return <CardView character={character} key={i}></CardView>
                    })}
                </div>

                <Pagination
                    currentPage={this.state.currentPage}
                    totalPages={25}
                    changeCurrentPage={this.changeCurrentPage}
                    theme="square-i"
                />
            </div>
        )
    }
}