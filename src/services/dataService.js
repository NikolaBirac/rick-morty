import {apiURL} from "../shared/constants";
import axios from "axios";
import Character from "../entities/constructor";

class CharactersService {

    getCharacters() {
        return axios.get(apiURL)
            .then(data => data.data.results)
            .then(characters => {
                // console.log(characters);
                return characters.map(singleCharacter => {
                // return console.log(singleCharacter);
                    return new Character(singleCharacter.id, singleCharacter.name, singleCharacter.species, singleCharacter.gender, singleCharacter.location.name, singleCharacter.image)
                })
            })
    }

}

export default new CharactersService();