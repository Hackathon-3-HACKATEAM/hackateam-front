import React, {useState} from 'react';
import './Search.css'


export default function Search() {
    const [input, setInput] = useState("");
    let test = [
        {
            name: "Search",
            team: "hackathon2"
        },
        {
            name: "Search2",
            team: "hackathon1"
        },
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);

    };
    if(input.length > 0){
        test = test.filter((i) => {
            return i.name.match(input);
        });
    }

    return(
        <div className="search-bar">
            <input 
            type="text" 
            placeholder="Rechercher"
            onChange={handleChange}
            value={input}
            />

         
            {test.map((player, index) => {
                return ( 
                   <div key={index}> 
                    <ul> 
                        <li> {player.name} - {player.team}</li>
                    </ul>
                    </div>
                )
            })}
        </div>
    );
}