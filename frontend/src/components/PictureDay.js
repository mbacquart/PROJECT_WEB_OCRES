import React from "react";

import { Typography, Box, Avatar } from '@mui/material'

class PictureDay extends React.Component {

  state = {
    picture: {}
  }

  componentDidMount() {

    fetch('https://api.nasa.gov/planetary/apod?api_key=cBZnE40AExhLVH2K4idIsdICatuoNmadeLRzxLCL')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ picture: result });

      })

  }
  render() {


    return (
      <Box sx={{padding: '20px'}} >
        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} variant="h5" >
          Picture of the day
        </Typography>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '16px',marginTop:2 }} variant="subtitle" >
          {this.state.picture.title}
        </Typography>
        <Avatar
          style={{ width: '100%', height: 'auto' }}
          src={this.state.picture.url}
          alt={this.state.picture.title}
          className="photo"
          variant="square"
        />
      </Box>
    );
  }
}

export default PictureDay;
