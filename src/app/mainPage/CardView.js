import React from 'react';
import icon from '../../images/unlike.svg';

export const CardView = (props) => {

    return (
            <div id={props.character.id}>
                <img src={props.character.image} alt="logo" className="card__img"></img>
                {/* <img src={icon} className="card__bookmark"></img> */}
                <p className="card__name">{props.character.name}</p>
            </div>
    );
}