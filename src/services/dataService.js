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
                let bookmarkedCharacters = this.getBookmarkedCharacters();
                return {
                    characters: characters.map(singleCharacter => {
                    let bookmarkState = bookmarkedCharacters.some(c => singleCharacter.id === c.id);         
                    return new Character(singleCharacter.id, singleCharacter.name, singleCharacter.image, bookmarkState);
                    }), 
                    pagesNumber: pagesNumber
                }
            });
    }

    getCharaterDetails(id) {
        return axios.get(apiURL + id)
            .then( data => data.data)
            .then( character => {
                return new CharacterDetails(character.id, character.name, character.species, character.gender, character.location.name, character.image, character.episode.length)
            })
    }

    filterCharacters(filters) {
        let query = "";
        
        if (filters.length > 1) {
            filters.map(filter => {
                return query = query + `${filter.filter}=${filter.value}&`
            })
        } else {
            query = `${query}${filters[0].filter}=${filters[0].value}`;
        }
        // ?name=rick&status=alive

        // if (query === "") {

        // } else {
            let pagesNumber;
            return axios.get(apiURL + `?${query}`)
            .then(data => {  
                pagesNumber = data.data.info.pages;
                return data.data.results
            })
            .then(characters => {
                    let bookmarkedCharacters = this.getBookmarkedCharacters();
                    return {
                        characters: characters.map(singleCharacter => {
                        let bookmarkState = bookmarkedCharacters.some(c => singleCharacter.id === c.id);         
                        return new Character(singleCharacter.id, singleCharacter.name, singleCharacter.image, bookmarkState);
                        }), 
                        pagesNumber: pagesNumber
                    }
                });
        // }
        
    }

    getBookmarkedCharacters() {
        let bookmarkedCharacters = [];
        try {
            bookmarkedCharacters = JSON.parse(localStorage.getItem("bookmarkedCharacters"));
            
            if (bookmarkedCharacters === null) {
                bookmarkedCharacters = [];
            }
        } catch(e) {
            alert("Error getting bookmarked characters.");
        }
        return bookmarkedCharacters;
    }
}

export default new CharactersService();