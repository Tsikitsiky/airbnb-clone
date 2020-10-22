import React from "react";
import Guest from "./guest";
 
const Popup = props => {
  console.log(props.guests)
  return (
    <div className="popup-box">
      <div className="box">
      <div className="head">
          <p>Edit your search</p>
          <button onClick={props.handleClicks}>x</button>
      </div>
        <form  onSubmit={props.handleSubmit}>
            <div>
                <fieldset>
                    <label>Location</label><br />
                    {/* <button type="button" value={props.city} className="city" onClick={props.handleChange}>{props.city}</button> */}
                    <select name="location" className="location" value={props.city} onChange={props.handleChange}>
                      <option className="option" value="Helsinki">Helsinki, Finland</option>
                      <option className="option" value="Turku">Turku, Finland</option>
                      <option className="option" value="Oulu">Oulu, Finland</option>
                      <option className="option" value="Vaasa">Vaasa, Finland</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label>Guest</label><br />
                    <button type="button" value={props.guests} className="guest" onClick={props.handleChange}>{props.count}</button>
                </fieldset>
            </div>
            <button className="button-search">Search</button>
        </form>
        {/* {props.isCity && <ul className="city-input">
          <li><input type="checkbox" Helsinki, Finland</li>
          <li><input type="checkbox" Turku, Finland</li>
          <li><input type="checkbox" Oulu, Finland</li>
          <li><input type="checkbox" Vaasa, Finland</li>
          </ul>} */}
        {props.isGuestShown && <Guest incrementGuest={props.incrementGuest} decrementGuest={props.decrementGuest} countAdult={props.countAdult} countChildren={props.countChildren} /> }
        
      </div>
    </div>
  );
};
 
export default Popup;