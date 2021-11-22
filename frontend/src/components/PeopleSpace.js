import React, { useEffect, useState } from "react";



class PeopleSpace extends React.Component {

  state = { 
    people: {}
  }

  componentDidMount(){

    fetch('http://api.open-notify.org/astros.json')
.then((response) => {
  return response.json()
})
.then((result) => {
  this.setState({people: result});

})

  }
	render() {
	

		return (
      <div className="PictureDay">
        <h1>Number of people</h1>
        <p>{this.state.people.number}</p>
           
               

       
      </div>
	);
}
}

export default PeopleSpace;
