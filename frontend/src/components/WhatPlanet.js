import React from "react";

export default class WhatPlanet extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "http://localhost:3001/posts";
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
        {this.state.people.map(person => (
          <div key={person.title}>
            <div>{person.title}</div>
            <div>{person.description}</div>
            <br />


          </div>
        ))}
      </div>
    );
  }
}