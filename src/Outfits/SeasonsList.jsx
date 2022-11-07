import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

function SeasonsList({ seasons, addSeason }) {
    
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    
    const SeasonsCard = seasons.map(season => <SeasonsCard key={season.id} season={season} />)
    
    const initalSeasonState ={
        season: "",
        image: "",
        temperature: "",
    }

    const [seasonForm, setSeasonForm] = useState(initalSeasonState)

    const handleSeasonChange = (event) => {
        setSeasonForm({
            ...seasonForm, [event.target.name] : event.target.value
        })
    }

    const handleSeasonSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9292/seasons", {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(seasonForm),
        })
        .then((res) => res.json())
        .then((season) => addSeason(season));
          setSeasonForm(initalSeasonState)
    }
    return (
            <div>
            <h1>Just went shopping?</h1>
            <h1>Add to the collection here!</h1>
        
            <form onSubmit={handleSeasonSubmit}>
              <label>Season Name</label>
              <input
                onChange={handleSeasonChange} 
                type="text"
                value={seasonForm.season}
                name="season"
                ana-label="season">
                </input>
                <label>Image</label>
              <input 
                onChange={handleSeasonChange}
                type="text"
                value={seasonForm.image_url}
                name="image"
                ana-label="image">
                </input>
                <label>Temperature</label>
              <input 
                onChange={handleSeasonChange}
                type="integer"
                value={seasonForm.temperature}
                name="temperature"
                ana-label="temperature">
                </input>
                <button>
                  submit
                </button>
            </form>
            </div>
          )
}

export default SeasonsList