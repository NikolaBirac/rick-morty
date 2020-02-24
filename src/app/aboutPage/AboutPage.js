
import React from 'react';

export default class CharacterDetailsPage extends React.Component {
 
    render() {
        return (
            <div className="container">
                <div className="about">
                    <div className="about__group">
                        <h2 className="about__heading">About</h2>
                        <p className="about__text">Rick&Morty is ReactJS Web App. The aim of application is to show cartoon characters.</p>
                    </div>

                    <div className="about__group">
                        <h2 className="about__heading">Task</h2>
                        <p className="about__text">
                            Create a React web application for browsing Rick & Morty characters.
                            The API documentation is located <a href="https://rickandmortyapi.com/documentation"  className="about__link" target="_blank" rel="noopener noreferrer">here</a>.
                        </p>
                        <p className="about__text">The web application should have a single grid view, displaying characters as cards.</p>
                        <p className="about__text">
                            Character cards should display character’s image and name. By clicking on a character card,
                            the user should be presented with character details, showing all other fields of the character
                            schema.
                        </p>
                        <p className="about__text">
                            The grid view should be paginated and load pages without reloading the current page.
                            If any errors occur, they should be presented to the user without breaking the usability of the
                            application.
                        </p>
                        <p className="about__text">The application should be responsive (target mobile, tablet and desktop).</p>
                    </div>
                </div>
            </div>
        )
    }
}