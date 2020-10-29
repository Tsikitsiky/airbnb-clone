import React from "react";
import Guest from "./guest";
import City from './city'
 
const Popup = ({
  handleChange,
   handleChangeCity, 
   handleClicks,
   guests,
   city,
   handleSubmit,
   count,
   isCity,
   isGuestShown,
   incrementGuest,
   decrementGuest,
   countAdult,
   countChildren
  }) => {
  console.log(city)
  return (
    <div className="popup-box">
      <div className="box">
      <div className="head">
          <p>Edit your search</p>
          <button onClick={handleClicks}>x</button>
      </div>
        <form  onSubmit={handleSubmit}>
            <div>
                <fieldset>
                    <label>Location</label><br />
                    <input 
                      type="text" 
                      value={city} 
                      className="city" 
                      placeholder={city? `${city}, Finland` : 'Helsinki, Finland'}
                      onChange={handleChangeCity}
                      onClick={handleChange}
                      />
                        
                    
                    {/* <select name="location" className="location" value={props.city} onChange={props.handleChange}>
                      <option className="option" value="Helsinki">Helsinki, Finland</option>
                      <option className="option" value="Turku">Turku, Finland</option>
                      <option className="option" value="Oulu">Oulu, Finland</option>
                      <option className="option" value="Vaasa">Vaasa, Finland</option>
                    </select> */}
                </fieldset>
                <fieldset>
                    <label>Guest</label><br />
                    <button 
                      type="button" 
                      value={guests} 
                      className="guest" 
                      onClick={handleChange}>
                      {count} guests
                    </button>
                </fieldset>
            </div>
            <button className="button-search">Search</button>
        </form>
        {isCity && <City handleChangeCity={handleChangeCity} />}
        {isGuestShown && <Guest 
        incrementGuest={incrementGuest} 
        decrementGuest={decrementGuest} 
        countAdult={countAdult} 
        countChildren={countChildren} /> }
        
      </div>
    </div>
  );
};
 
export default Popup;