import React from 'react';
import garbage from '../../images/garbage.svg';
import { Link } from 'react-router-dom';

export const BookmarkItem = (props) => {
    
    const handler = () => {
        props.handleBookmark(props.character);
    }

    return (
        <div className="bookmark__item">
            <Link to={"/character/" + props.character.id} className="bookmark__item-content">
                <img src={props.character.image} className="bookmark__img"></img>
                <p className="bookmark__text">{props.character.name}</p>
            </Link>
                <img src={garbage} onClick={handler} className="bookmark__garbage"></img>
            </div>
    );
}