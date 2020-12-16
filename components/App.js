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
    const [isCity, setIsCity] = useState(true)

    function handleClicks (e) { 
        setIsOpen(!isOpen);
        setIsCity(true);
        setIsGuestShown(false)
    }
        
        //add id to each apart
        for(let i = 0; i < aparts.length; i++) {
            aparts[i].id = i;
        }
        function handleChange (e) {
            if(e.target.matches('.city')) {
                setIsCity(true);
                setIsGuestShown(false)
            }
            if(e.target.matches('.guest')) {
                setIsGuestShown(!isGuestShown);
                setIsCity(false)
            }
        }

        //handle city input
        function handleChangeCity(e) {
                setCity(e.target.value);
                setIsCity(!isCity);
        }

        //handle the guest input
        const [countChildren, setCountChildren] = useState(0);
        const [countAdult, setCountAdult] = useState(0);
        const count = countChildren + countAdult;

        function incrementGuest(e) {
            if(e.target.matches('.adult')) {
                setCountAdult(countAdult + 1)
            }
            if(e.target.matches('.children')) {
                setCountChildren(countChildren + 1)
            }

            // const newAparts = aparts.filter(apart => apart.maxGuests >= count)
            // setAparts(newAparts)
            console.log(aparts)
            
        }
        function decrementGuest(e) {
            if(e.target.matches('.adult')) {
                if(count!== 0 ){
                    if(countAdult!== 0) {
                        setCountAdult(countAdult - 1)
                    }
                }
            }

            if(e.target.matches('.children')) {
                if(count!== 0) {
                    if(countChildren!== 0) {
                        setCountChildren(countChildren - 1)
                    }
                }
            }

            setGuests(count)
        //    const newAparts = aparts.filter(apart => apart.maxGuests >= count )
            // setAparts(newAparts)
            console.log(aparts)
        }

        function handleSubmit(e) {
            e.preventDefault();
            const newAparts = stays.filter(apart => apart.city.toLocaleLowerCase().includes(city.toLowerCase()));
            const newGuest = newAparts.filter(apart => apart.maxGuests >= count )
            setAparts(newGuest);
            setIsOpen(!isOpen)
        }
        
        return(
            <>
            <div className='buttons'>
                <button onClick={handleClicks} className='location'>
                    {city? `${city}, Finland` : 'Helsinki, Finland'}</button>
                <button onClick={handleClicks} className='add-guest'>
                    {count !== 0? `${count} guests` : "Add guests"}
                </button>
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
            setAparts= {setAparts}
            isGuestShown={isGuestShown}
            isCity={isCity}
            handleSubmit={handleSubmit}
            handleChangeCity={handleChangeCity} />}
            
            <div className="subheader">
                <h2>Stays in Finland</h2>
                <p>{aparts.length} stays</p>
            </div>
            <div className="card-list">
                {aparts.map(apart => <Stays {...apart} key={apart.id} />)}
            </div>
            </>
        )
}

export default App;