import React, {useState} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

    const NewOutfit = ({addOutfit}) => {

        const initialState = {
          top: "",
          bottom: "",
          color: "",
          event: "",
          temperature: "",
          season: "",
        }
      
        const [formData, setFormData] = useState(initialState);
      
        const handleChange = (event) => {
          setFormData({
            ...formData, [event.target.name] : event.target.value
            })
          }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          fetch("http://localhost:9292/outfits", {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
          })
          .then((res) => res.json())
          .then((outfit) => addOutfit(outfit));
          setFormData(initialState);
          }

        
        
        return ( 
          <div>
          <h1>Just went shopping?</h1>
          <h1>Add to the collection here!</h1>
          <img src="https://i.ytimg.com/vi/Iv_uhaFbcYs/maxresdefault.jpg" width="600" height="450" align="left"/>
      
          <form onSubmit={handleSubmit}>
            <label>Top</label>
            <input
              onChange={handleChange} 
              type="text"
              value={formData.top}
              name="top"
              ana-label="top">
              </input>
              <br></br>
              <label>Bottom</label>
            <input 
              onChange={handleChange}
              type="text"
              value={formData.bottom}
              name="bottom"
              ana-label="bottom">
              </input>
              <br></br>
              <label>Color</label>
            <input 
              onChange={handleChange}
              type="text"
              value={formData.color}
              name="color"
              ana-label="color">
              </input>
              <br></br>
              <label>Event</label>
            <input 
              onChange={handleChange}
              type="text"
              value={formData.event}
              name="event"
              ana-label="event">
              </input>
              <br></br>
              <label>Temperature</label>
            <input 
              onChange={handleChange}
              type="integer"
              value={formData.temperature}
              name="temperature"
              ana-label="temperature">
              </input>
              <br></br>
              <label>Season</label>
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value="season"
                    onChange={handleChange}
                  >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Winter">Winter</MenuItem>
                      <MenuItem value="Spring">Spring</MenuItem>
                      <MenuItem value="Summer">Summer</MenuItem>
                      <MenuItem value="Automn">Automn</MenuItem>
                    </Select>
          <FormHelperText>Please select one</FormHelperText>
        </FormControl>
            {/* <input 
              onChange={handleChange}
              type="text"
              value={formData.season}
              name="season"
              ana-label="season">
              </input> */}
              <br></br>
              <button>
                submit
              </button>
          </form>
          </div>
        )
      }


export default NewOutfit;