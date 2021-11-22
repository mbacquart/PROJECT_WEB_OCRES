import React, { useEffect, useState } from "react";



class PictureDay extends React.Component {

  state = { 
    picture: {}
  }

  componentDidMount(){

    fetch('https://api.nasa.gov/planetary/apod?api_key=cBZnE40AExhLVH2K4idIsdICatuoNmadeLRzxLCL')
.then((response) => {
  return response.json()
})
.then((result) => {
  this.setState({picture: result});

})

  }
	render() {
	

		return (
      <div className="PictureDay">
        <h1>Picture of the day</h1>
        <p>{this.state.picture.title}</p>
        <img
          src={this.state.picture.url}
          alt={this.state.picture.title}
          className="photo"
        />
      </div>
	);
}
}

export default PictureDay;
