import React from 'react';
import icon from '../../images/unlike.svg';
import icon1 from '../../images/like.svg';
import { Link } from 'react-router-dom';

export const CardView = (props) => {

    const handler =  () => {
        props.handleBookmark(props.character);
    }

    return (
            <div id={props.character.id} className="card">
                {!props.character.bookmarkState ? <img src={icon} onClick={handler} className="card__bookmark" alt="bookmark"></img> : <img src={icon1} onClick={handler} className="card__bookmark" alt="bookmark"></img> }

                <Link to={"/character/" + props.character.id} >
                    <img src={props.character.image} alt="logo" className="card__img"></img>
                    <p className="card__name">{props.character.name}</p>
                </Link>
            </div>
    );
}