import React from "react";

function Guest(props) {
    return(
        <ul className="guest-input">
          <li>
            <h5>Adults</h5>
            <p>Ages 13 or above</p>
            <div>
              <button className="adult" onClick={props.decrementGuest}>-</button>
              <p>{props.countAdult}</p>
              <button className="adult" onClick={props.incrementGuest}>+</button>
            </div>
          </li>
          <li>
            <h5>Children</h5>
            <p>Ages 2-12</p>
            <div>
            <button className="children" onClick={props.decrementGuest}>-</button>
            <p>{props.countChildren}</p>
              <button className="children" onClick={props.incrementGuest}>+</button>
            </div>
          </li>
        </ul>
    )
}

export default Guest;