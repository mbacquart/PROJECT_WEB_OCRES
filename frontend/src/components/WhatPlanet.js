import React from "react";
import { Button, Typography, TextField } from '@mui/material'
class WhatPlanet extends React.Component {


  constructor(props) {
    super(props);
  }

  state = {
    value: ''
  }

  getValue = (event) => {
    console.log(event.target.value);

    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // stop reloading
    const value = this.state.value;
    console.log('Value on submit :', value);
    // what i want to do
  }

  render() {

    console.log('State: ', this.state);
    return (
      <div>
        {/* <h2>What Planet do you want to show information ?</h2> */}
        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} variant="h5" >What Planet do you want to show information ?</Typography>

        <form action="">
          {/* <div> */}
          <label htmlFor=""></label>
          {/* <input type="text" onChange={this.getValue} /> */}
          <TextField fullWidth
            margin="normal" variant="outlined"
            InputProps={{
              style: {
                color: "white",
                textOverflow: "ellipsis",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#fff",
              },
              "& .MuiInputLabel-root": {
                color: "#fff",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff",
              },
              marginTop:3,
              marginBottom:3
            }}
            label="Planet Name..."
            onChange={this.getValue} />
          {/* </div> */}
          <br />
          {/* <button onClick={this.handleSubmit} >Envoyer</button> */}

          <Button fullWidth sx={{ backgroundColor: '#66FDD9', color: 'black', fontWeight: 'bold' }}
            onClick={this.handleSubmit}
          >
           Envoyer
          </Button>
        </form>


      </div>



    );
  }
}

export default WhatPlanet;