import React from 'react'


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
      <form onSubmit={this.handleSubmit}>
        <label>
          lat:
          <input type="number" value={this.state.lat} onChange={this.handleChange} />        </label>
        <label>
          lng:
          <input type="number" value={this.state.lng} onChange={this.handleLng} />        </label>
        <input type="submit" value="Submit" />
        <br />

        {this.state?.result !== "" ? "The UVI IS:" + this.state?.result : ""}
      </form>
    );
  }
}
export default Uvi