import React, { useEffect, useState, } from "react";

class WhatPlanet extends React.Component {
 

  constructor(props) {
    super(props);
  }

  state = {
    value: ''
  }

  getValue = (event) => {
    console.log(event.target.value);

    this.setState({ value: event.target.value});
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
        <h2>What Planet do you want to show information ?</h2>

        <form action="">
          <div>
            <label htmlFor=""></label>
            <input type="text" onChange= { this.getValue} />
          </div>
          <button onClick = {this.handleSubmit} >Envoyer</button>

        </form>

   
      </div>


   
    );
  }
}

export default WhatPlanet;