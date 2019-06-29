import React from 'react';
import charactersService from '../../services/dataService';
import { CardView } from './CardView';


export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            charactersArray: []
        }
    }
    
    loadCharacters() {
        charactersService.getCharacters()
            .then(characters => {

                this.setState({
                    charactersArray: characters
                })
                
            })
    }

    componentDidMount() {
        this.loadCharacters();
    }   

    render() {
        return (
            <div className="container">
                <div className="characters-content">
                    {this.state.charactersArray.map((character, i) => {
                        return <CardView character={character} key={i}></CardView>
                    })}
                </div>
            </div>
        )
    }
}