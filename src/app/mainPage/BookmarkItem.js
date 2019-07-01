import React from 'react';
import garbage from '../../images/garbage.svg';

export const BookmarkItem = (props) => {
    
    const handler = () => {
        props.handleBookmark(props.character);
    }

    return (
        <div className="bookmark__item">
            <img src={props.character.image} className="bookmark__img"></img>
            <p className="bookmark__text">{props.character.name}</p>
            <img src={garbage} onClick={handler} className="bookmark__garbage"></img>
        </div>
    );
}