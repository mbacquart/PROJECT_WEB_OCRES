import React from 'react';
import './App.css';

import { Grid, Box, Paper } from '@mui/material'
import WhatPlanet from './components/WhatPlanet'
import PictureDay from './components/PictureDay';
import WhereIss from './components/WhereIss';
import PeopleSpace from './components/PeopleSpace';
import Chart from './components/Chart';
import Uvi from './components/Uvi';

function App() {
  return (
    // <div className="App">
    //   <Chart />
    //   <Uvi />
    //   <PeopleSpace />
    //   <WhereIss />
    //   <PictureDay />
    //   < WhatPlanet />
    // </div>
 
    <Box sx={{ backgroundColor: '#303030' }}>
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#424242",
              padding: 7,
              borderRadius: 3, height: '70%'
            }}>
            <Uvi />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}  >
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#424242",
              padding: 7,
              borderRadius: 3, height: '70%'
            }}>
            <PeopleSpace />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#424242",
              padding: 7,
              borderRadius: 3,
              height: '70%'
            }}>
            <WhatPlanet />
          </Paper>
        </Grid>
      </Grid>

      {/* Second Row */}

      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#424242",
              padding: 5,
              borderRadius: 3,
              height: '90%'
            }}>
            <PictureDay />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} >
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#424242",
              padding: 7,
              borderRadius: 3,
              height: '85%'
            }}>
            <Chart />
          </Paper>
        </Grid>
      </Grid>
      {/* 3rd Row */}
      <Grid container sx={{ padding: '20px',marginTop:3 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            elevation={10}
            sx={{
              backgroundColor: "#424242",
              padding: 7,
              borderRadius: 3,
            }}>
            <WhereIss />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
