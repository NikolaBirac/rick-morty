import {apiURL} from "../shared/constants";
import axios from "axios";
import Character from "../entities/constructor";

class CharactersService {

    getCharacters(pageNumber) {
        let pagesNumber;
            return axios.get(apiURL + '/?page=' + pageNumber)
            .then(data => {  
                pagesNumber = data.data.info.pages;
                return data.data.results
            })
            .then(characters => {
                return {
                    characters: characters.map(singleCharacter => {
                    return new Character(singleCharacter.id, singleCharacter.name, singleCharacter.species, singleCharacter.gender, singleCharacter.location.name, singleCharacter.image)
                    }), 
                    pagesNumber: pagesNumber
                }
            })
            .catch(error => {
                alert(error)
            })
    }


}

export default new CharactersService();