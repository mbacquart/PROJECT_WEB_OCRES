import React from "react";
import { Typography, Box, Avatar } from '@mui/material'

export default class WhatPlanet extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "http://localhost:3002/posts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    

    return (
      <div>
       <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} variant="h5" >Breaking News</Typography>
        {this.state.people.map(person => (
          <div key={person.title}>


            <Typography sx={{ color: 'red', fontWeight: 'bold', textAlign: 'center', fontSize: '16px',marginTop:2 }} variant="subtitle" >
          {person.title}
        </Typography>
        < br/>
        <Typography sx={{ color: 'white', textAlign: 'center', fontSize: '16px',marginTop:2 }} variant="subtitle" >
          {person.description}
        </Typography>
        <br />


            <br />


          </div>
        ))}
      </div>
    );
  }
}