import {apiURL} from "../shared/constants";
import axios from "axios";
import Character from "../entities/Character";
import CharacterDetails from "../entities/CharacterDetails";

class CharactersService {

    getCharacters(pageNumber) {
        let pagesNumber;
            return axios.get(apiURL + '?page=' + pageNumber)
            .then(data => {  
                pagesNumber = data.data.info.pages;
                return data.data.results
            })
            .then(characters => {
                return {
                    characters: characters.map(singleCharacter => {
                    return new Character(singleCharacter.id, singleCharacter.name, singleCharacter.image)
                    }), 
                    pagesNumber: pagesNumber
                }
            })
            .catch(error => {
                alert(error)
            })
    }

    getCharaterDetails(id) {
        return axios.get(apiURL + id)
            .then( data => data.data)
            .then( character => {
                return new CharacterDetails(character.id, character.name, character.species, character.gender, character.location.name, character.image, character.episode.length)
            })
            .catch(error => {
                alert(error);
            })
    }


}

export default new CharactersService();