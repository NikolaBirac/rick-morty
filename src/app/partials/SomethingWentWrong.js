import React from 'react';
import image from '../../images/something-went-wrong.png';

export const SomethingWentWrong = (props) => {

    return (
        <div className="serviceError">
            <img src={image} className="serviceError__img" alt="Something went wrong!"></img>
            <p className="serviceError__text">Ooops! Something went wrong!</p>
        </div>
    );
}