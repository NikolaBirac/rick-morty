import React from 'react';
import icon from '../../images/like.svg';
import { BookmarkItem } from './BookmarkItem';

export const Bookmark = (props) => {

    return (
        <div className="bookmark">
            <div className="bookmark__container">
                <img src={icon} className="bookmark__icon" alt="bookmark"></img>
                <p className="bookmark__number">{props.characters.length}</p>
                <div className="bookmark__box">
                    { props.characters.length === 0 ? 
                        <div className="bookmark__item">
                            <div className="bookmark__item-content">
                                <p className="bookmark__text">No bookmarked characters</p>
                            </div>
                        </div> : 
                    props.characters.map((character, i) => {
                        return <BookmarkItem character={character} handleBookmark={props.handleBookmark} key={i}></BookmarkItem>
                    })}
                </div> 
            </div>
        </div>
    );
}