import React, {useState} from "react";
import stays from '../stays.json';
import Popup from "./popup";
import Stays from "./stays";

function App() {
    //set up the popup
    const [isOpen, setIsOpen] = useState(false);
    function handleClicks (e) {
        setIsOpen(!isOpen);
    }
        const aparts = stays;
        return(
            <>
            <div className='buttons'>
                <button onClick={handleClicks} className='location'>Helsinki, Finland</button>
                <button onClick={handleClicks} className='add-guest'> Add guests</button>
                <button onClick={handleClicks} className='search-icon'></button>
            </div>
            {isOpen && <Popup handleClicks={handleClicks} />}
            <h2>Stays in finland</h2>
            {aparts.map(apart => <Stays  key={apart.title} {...apart} />)}
            </>
        )
}

export default App;