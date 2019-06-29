import {apiURL} from "../shared/constants";
import axios from "axios";
import Character from "../entities/constructor";

class CharactersService {

    getCharacters(pageNumber) {
            return axios.get(apiURL + '/?page=' + pageNumber)
            .then(data => data.data.results)
            .then(characters => {
                // console.log(characters);
                return characters.map(singleCharacter => {
                // return console.log(singleCharacter);
                    return new Character(singleCharacter.id, singleCharacter.name, singleCharacter.species, singleCharacter.gender, singleCharacter.location.name, singleCharacter.image)
                })
            })
            .catch(error => {
                alert(error)
            })
    }

}

export default new CharactersService();