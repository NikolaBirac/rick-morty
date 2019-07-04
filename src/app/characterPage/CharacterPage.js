
import React from 'react';

import dataService from '../../services/dataService';
import { Loading } from '../partials/Loading';
import { SomethingWentWrong } from '../partials/SomethingWentWrong';


export default class CharacterDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: null,
            error: false
        }
    }

    loadCharacter() {
        dataService.getCharaterDetails(this.props.match.params.id)
            .then( character => {
                this.setState({
                    character: character
                });
            })
            .catch(() => {
                this.setState({
                    error: true
                })
            })
    }

    componentDidMount() {
        this.loadCharacter();
    }  

    render() {
        return (
            <div>
                { this.state.error ? <SomethingWentWrong /> :
                    <div className="container">
                        {!this.state.character ? <Loading /> : 
                            <div className="details">
                                    <img src={this.state.character.image} alt="character" className="details__img"></img>
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
                }
            </div>
            
        )
    }
}