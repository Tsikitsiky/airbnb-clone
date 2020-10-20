import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="head">
          <p>Edit your search</p>
          <button onClick={props.handleClicks}>x</button>
      </div>
        <form>
            <div>
                <fieldset>
                    <label>Location</label><br />
                    <input type="text" placeholder="Helsinki, Finland" />
                </fieldset>
                <fieldset>
                    <label>Guest</label><br />
                    <input type="text" placeholder="Add guests" />
                </fieldset>
            </div>
            <button className="button-search">Search</button>
        </form>
    </div>
  );
};
 
export default Popup;