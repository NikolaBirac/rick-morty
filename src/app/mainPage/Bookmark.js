import React from 'react';
import icon from '../../images/like.svg';
import { BookmarkItem } from './BookmarkItem';

export const Bookmark = (props) => {

    return (
        <div className="bookmark">
            <img src={icon} className="bookmark__icon"></img>
            <div className="bookmark__box">
                { props.characters.length == 0 ? <div className="bookmark__item"><p className="bookmard__text">No bookmarked characters</p></div> : 
                props.characters.map((character, i) => {
                    return <BookmarkItem character={character} handleBookmark={props.handleBookmark} key={i}></BookmarkItem>
                })}
            </div>
        </div>
    );
}