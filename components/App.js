import React, {useState} from "react";
import stays from '../stays.json';
import Popup from "./popup";
import Stays from "./stays";

function App() {
    let [aparts, setAparts] = useState([...stays])
    //set up the popup
    const [isOpen, setIsOpen] = useState(false);
    //filter the city
    const [city, setCity] = useState('');
    //filter the guest number
    const [guests, setGuests] = useState(0);
    //icrement and decrement popup
    const [isGuestShown, setIsGuestShown] = useState(false);
    //city list
    const [isCity, setIsCity] = useState(false)

    function handleClicks (e) {
        setIsOpen(!isOpen);
    }
        
        //add id to each apart
        for(let i = 0; i < aparts.length; i++) {
            aparts[i].id = i;
        }
        function handleChange (e) {
            if(e.target.matches('.location')) {
                //setIsCity(!isCity);
                setCity(e.target.value);
                aparts = aparts.filter(apart => apart.city.toLocaleLowerCase().includes(e.target.value.toLowerCase()));
                setAparts(aparts);
            }
            if(e.target.matches('.guest')) {
                setIsGuestShown(!isGuestShown);
            }
        }

        const [count, setCount] = useState(0);
        const [countChildren, setCountChildren] = useState(0);
        const [countAdult, setCountAdult] = useState(0);

        function incrementGuest(e) {
            
            if(e.target.matches('.adult')) {
                setCountAdult(countAdult + 1)
            }
            if(e.target.matches('.children')) {
                setCountChildren(countChildren + 1)
            }
            setCount(countChildren + countAdult);

            setGuests(count);
            aparts = aparts.filter(apart => apart.maxGuests >= count)
            setAparts(aparts)
            console.log(aparts)
            
        }
        function decrementGuest(e) {
            if(e.target.matches('.adult')) {
                setCountAdult(countAdult - 1)
            }
            if(e.target.matches('.children')) {
                setCountChildren(countChildren - 1)
            }
            setCount(countChildren + countAdult )

            setGuests(count)
            aparts = aparts.filter(apart => apart.maxGuests >= count )
            setAparts(aparts)
            console.log(aparts)
        }

        function handleSubmit(e) {
            e.preventDefault();
            setIsOpen(!isOpen)
        }
        
        return(
            <>
            <div className='buttons'>
                <button onClick={handleClicks} className='location'>Helsinki, Finland</button>
                <button onClick={handleClicks} className='add-guest'> Add guests</button>
                <button onClick={handleClicks} className='search-icon'></button>
            </div>
            {isOpen && <Popup 
            handleClicks={handleClicks} 
            aparts={aparts} 
            city={city} 
            count={count}
            handleChange={handleChange}
            incrementGuest={incrementGuest}
            decrementGuest={decrementGuest}
            countAdult={countAdult}
            countChildren={countChildren}
            guests={guests}
            isGuestShown={isGuestShown}
            isCity={isCity}
            handleSubmit={handleSubmit} />}
            
            <div className="subheader">
                <h2>Stays in Finland</h2>
                <p>12+ stays</p>
            </div>
            {aparts.map(apart => <Stays {...apart} key={apart.id} />)}
            </>
        )
}

export default App;