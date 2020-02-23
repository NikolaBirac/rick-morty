import React from 'react';
import exit from '../../images/exit.svg';

export const Filter = (props) => {

    const handler = (filter, value) => {
        props.filterCharacters(filter, value);
        // console.log(filter,value);
    }

    const handlerInput = (event) => {
        let name = event.target.value;
        // setTimeout(() => {
            props.filterCharacters("name", name);
            // console.log(name);
        // }, (1500));     
    }

    const removeFilterHandler = (filter) => {
        props.removeFilter(filter);
    }

    return (
        <div className="filters">
            <div className="filters__filter">
              <h3 className="filters__title">Filters</h3>
              <div className="dropdown dropdown-filter">
                <div className="dropdown__item">
                    <div className="dropdown__item-content">
                        {/* <label for="lname">Last name:</label> */}
                        <input type="text" name="name" onChange={handlerInput} placeholder="Name" className="dropdown__input"/>
                        {/* <button></button> */}
                    </div>
                </div>
                <div className="dropdown__item">
                    <div className="dropdown__item-content">
                        <p>Status:</p>
                        <div className="btn" onClick={()=>handler("status","alive")}>Alive</div>
                        <div className="btn" onClick={()=>handler("status","dead")}>Dead</div>
                        <div className="btn" onClick={()=>handler("status","unknown")}>Unknown</div>
                    </div>
                </div>
                <div className="dropdown__item">
                    <div className="dropdown__item-content">
                        <p>Gender:</p>
                        <div className="btn" onClick={()=>handler("gender","male")}>Male</div>
                        <div className="btn" onClick={()=>handler("gender","female")}>Female</div>
                        <div className="btn" onClick={()=>handler("gender","genderless")}>Genderless</div>
                        <div className="btn" onClick={()=>handler("gender","unknown")}>Unknown</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="filters__applied">
                {props.filters.map(filter => {
                    return <div key={filter.filter} className="filters__single">{filter.value} 
                                <img src={exit} alt="remove" onClick={()=>removeFilterHandler(filter.filter)} className="filters__icon"/>
                            </div>
                })}
            </div>
        </div>
    );
}