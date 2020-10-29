import React from 'react';

export default function City(props) {
    return(<ul className="city-input">
    <li><label className='checkbox'><input type="checkbox" value="Helsinki" onChange={props.handleChangeCity} />Helsinki, Finland</label></li>
    <li><label className='checkbox'><input type="checkbox" value="Turku" onChange={props.handleChangeCity} />Turku, Finland</label></li>
    <li><label className='checkbox'><input type="checkbox" value="Oulu" onChange={props.handleChangeCity} />Oulu, Finland</label></li>
    <li><label className='checkbox'><input type="checkbox" value="Vaasa" onChange={props.handleChangeCity} />Vaasa, Finland</label></li>
    <li><label className='checkbox'><input type="checkbox" value="" onChange={props.handleChangeCity} />All</label></li>
    </ul>) 
}