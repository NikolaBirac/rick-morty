import React from 'react';
import garbage from '../../images/garbage.svg';
import { Link } from 'react-router-dom';

export const BookmarkItem = (props) => {
    
    const handler = () => {
        props.handleBookmark(props.character);
    }

    return (
        <div className="dropdown__item">
            <Link to={"/character/" + props.character.id} className="dropdown__item-content">
                <img src={props.character.image} className="dropdown__img" alt={props.character.name}></img>
                <p className="dropdown__text">{props.character.name}</p>
            </Link>
                <img src={garbage} onClick={handler} className="dropdown__garbage" alt="trash"></img>
            </div>
    );
}