import React from 'react';

function Stays(apart) {
    return(
        <div className='card'>
            <img className="photo" src={apart.photo} alt={apart.title} />
            <div>
                {apart.superHost? <button className='super-host'>Super Host</button> : '' }
                <p className="grey-text">{apart.type} {apart.superHost ? `.${apart.beds} beds` : ''} </p>
                <p className="rating">{apart.rating}</p>
            </div>
            <p>{apart.title}</p>
        </div>
        )
}

export default Stays;