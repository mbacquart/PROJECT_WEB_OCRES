import React, { useEffect, useState } from "react";



class PeopleSpace extends React.Component {

  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "http://api.open-notify.org/astros/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.people, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }




    


    return (
         
      <div>

        {this.state.people.map(person => 
        (
          <div key={person.craft}>
            <div>{person.name}</div>

            <div>{person.craft}</div>
          
          </div>
        ))}
      </div>
    );
  }
}

export default PeopleSpace;
