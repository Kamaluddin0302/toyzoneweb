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
      <Header history = {props.history}/>
      <Topbar />
      <Navbar history = {props.history}/>
       <Grid container justify='right'>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>

        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards history = {props.history} image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
           image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"/>
        </Grid>
      


      </Grid>
      <div style = {{marginTop : "20vh"}}>
      <Customers /> 
     <Footer />
      </div>
    </div>
  );
}

export default App;
