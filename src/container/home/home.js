import React from 'react';
import Cards from '../../component/card/card';
import Topbar from './../../component/Topbar/Topbar'
import Navbar from '../../component/Navbar/Navbar';
import Slider from '../../component/Slider/Slider';
import Header from './../../component/Header/Header'


import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Navbar />
      <Slider />
      <h1>Home</h1>
      <Grid container justify='center'>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards />
        </Grid>



      </Grid>
    </div>
  );
}

export default App;
