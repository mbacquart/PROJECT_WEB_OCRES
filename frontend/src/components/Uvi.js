import React from 'react'
import { Typography, TextField, Button } from '@mui/material'

class Uvi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: '', lng: '', result: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ ...this.state, lat: event.target.value }); }
  handleLng = (event) => { this.setState({ ...this.state, lng: event.target.value }); }
  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lng}&appid=a7b6517bc0331c9153024c416ceefadf`)
      const res = await response.json()
      this.setState({ ...this.state, result: res?.current?.uvi });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} variant="h5" >UVI Index</Typography>
        <form onSubmit={this.handleSubmit}>
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
            }}
            type="number" label="Latitude" value={this.state.lat}
            onChange={this.handleChange} />
          <p></p>

          <TextField fullWidth margin="normal" variant="outlined"
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
            }}
            InputProps={{ style: { color: 'white', textOverflow: 'ellipsis', } }} type="number" label="Longitude" value={this.state.lng} onChange={this.handleLng} />
          <p></p>
          <Button fullWidth sx={{ backgroundColor: '#66FDD9', color: 'black', fontWeight: 'bold' }} type="submit" value="Submit" >
            Check
          </Button>
          <br />
          {this.state?.result !== "" ?
            <Typography variant="subtitle" sx={{ fontWeight: 'bold', marginTop: 5, color: 'white' }} >

              Le rayon UV est de :  + {this.state?.result}
            </Typography> : ""}
        </form>
      </div>
    );
  }
}
export default Uvi