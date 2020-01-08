import React from 'react';
import Cards from '../../component/card/card';
import Topbar from './../../component/Topbar/Topbar'
import Navbar from '../../component/Navbar/Navbar';
import Header from './../../component/Header/Header'
import Grid from '@material-ui/core/Grid';
import Footer from './../../component/footer/footer'
import Customers from './../../component/social/social'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Navbar history = {props.history}/>
       <Grid container justify='right'>
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

      <Customers /> 
  <Footer />
    </div>
  );
}

export default App;
