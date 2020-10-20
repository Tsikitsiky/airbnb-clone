import React, {Component} from "react";
import stays from '../stays.json';

class App extends Component {
    render() {
        const aparts = stays;
        return(
            <>
            <div className='buttons'>
                <button className='location'>Helsinki, Finland</button>
                <button className='add-guest'> Add guests</button>
                <button className='search-icon'></button>
            </div>
            <h2>Stays in finland</h2>
            {aparts.map(apart => {
                return(
                <div key={apart.title} className='card'>
                    <img className="photo" src={apart.photo} alt={apart.title} />
                    <div>
                        <button className='super-host'>Super Host</button>
                        <p>{apart.type}. {apart.beds} beds</p>
                        <p>{apart.rating}</p>
                    </div>
                    <p>{apart.title}</p>
                </div>
                )
            })}
            </>
        )
    }
}

export default App;