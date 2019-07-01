
import React from 'react';
import dataService from '../../services/dataService';
import { Loading } from '../partials/Loading';


export default class CharacterDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: null
        }
    }

    loadCharacter() {
        dataService.getCharaterDetails(this.props.match.params.id)
            .then( character => {
                this.setState({
                    character: character
                })
                console.log(character);
            })
    }

    componentDidMount() {
        this.loadCharacter();
    }  

    render() {
        return (
            <div className="container">
                {!this.state.character ? <Loading /> : 
                    <div className="details">
                            <div>
                                <img src={this.state.character.image} alt="logo"></img>
                            </div>
                            <div className="details__info">
                                <p className="details__text">Name: {this.state.character.name}</p>
                                <p className="details__text">Gender: {this.state.character.gender}</p>
                                <p className="details__text">Location: {this.state.character.location}</p>
                                <p className="details__text">Species: {this.state.character.species}</p>
                                <p className="details__text">Number of episodes: {this.state.character.episode}</p>
                            </div>
                    </div>  
                }
            </div>
        )
    }
}