import React from 'react';

function Stays(apart) {
    return(
        <div className='card'>
            <img className="photo" src={apart.photo} alt={apart.title} />
            <div>
                <button className='super-host'>Super Host</button>
                <p>{apart.type}. {apart.beds} beds</p>
                <p className="rating">{apart.rating}</p>
            </div>
            <p>{apart.title}</p>
        </div>
        )
}

export default Stays;