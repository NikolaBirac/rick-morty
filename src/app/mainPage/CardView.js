import React from 'react';

export const CardView = (props) => {

    // const handler = (event) => {
    //     console.log(props);
        
    //     // props.loadCharacterDetails(event.target.id);
    //     // console.log(event);
    //     // console.log(props.character.id);
    //     // return <Redirect to='/character' />
    //     this.props.history.push('/character')
    // }

    return (
            <div id={props.character.id}>
                <img src={props.character.image} alt="logo" className="card__img"></img>
                <p className="card__name">{props.character.name}</p>
            </div>
    );
}