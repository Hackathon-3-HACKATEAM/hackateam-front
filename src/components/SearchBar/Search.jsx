import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import './Search.css'

// Empty => 0 elements
// Max => 5

export default function Search(props) {
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);




    useEffect(() => {
      axios
        .get('http://localhost:8000/api/cities', {
        })
        .then((res) => res.data)
        .then((data) => {
          setCities(data);
        })
        .catch((err) => {
          let message;
          if (err.response.status === 401) {
            message = "You're not authorized to access these datas";
          } else {
            message = err.response.data.errorMessage;
          }
          console.log(message);
          console.error(err);
        });
    }, []);

    useEffect(() => {
      // Fonction qui s'auto appelle
      (async () => {
        
        if (cities.length > 0) {
          const data = await filterCities(search, cities);
          console.log({data});
          setFilteredCities(data);
        }
      })();
      
    }, [search]);

    /**
     * @param {*} text Texte venant de la barre de recherche
     * @param {*} arr Collection de villes à filtrer
     */
    const filterCities = (text, arr) => {
        const filteredArray = cities.filter(city => {
          return city.city.toLowerCase().includes(search.toLowerCase());
        });

        filteredArray.sort((a, b) => {
            if(a.city < b.city) { return -1; }
            if(a.city > b.city) { return 1; }
            return 0;
        });
        const newArr = filteredArray.slice(0, 5);
  
        // console.log({filteredArray});
        return newArr;        
    }
    
    return(
        <div className="search-bar">
            <input
              className="input-searchbar"
              type="text" 
              placeholder="Rechercher"
              onChange={ e => setSearch(e.target.value)}
            />

            { // Affichage conditionnel
              isLoading && (
                <span>Loading...</span>
              )
            }
            
            {  // Affichage conditionnel
              search && !isLoading && (
                filteredCities.map((city) => {
                  return (
                    <div className="search-results" key={city.id}> 
                          <p className="results" onClick={()=>(props.setZipCode(city.zipcode),
                          props.setCityStart(city.city),
                            props.setLongMap(city.lat),props.setLatMap(city.long),
                            setSearch(""))}> {city.city} ( {city.zipcode} ) </p>
                    </div>
                  )
                })
              )
            }

        </div>
    );
}