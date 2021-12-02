import React from "react";
import { Typography } from '@mui/material'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";


class WhereIss extends React.Component {

  state = {
    iss: {}
  }

  componentDidMount() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ iss: result });
      })
  }
  render() {
    return (
      <div className="PictureDay">
        {/* <h1>International Space Station</h1> */}
        <Typography sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: { xs: '20px', lg: '28px' } }}  >
          International Space Station
        </Typography>
        <ComposableMap>
          <Geographies geography={'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'}>
            {({ geographies }) =>
              geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
          <Marker coordinates={[this.state.iss.longitude, this.state.iss.latitude]}>
            <circle r={6} fill="#F53" />
          </Marker>
        </ComposableMap>

      </div>

    );
  }
}

export default WhereIss;
