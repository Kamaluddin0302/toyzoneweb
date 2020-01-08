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
       <Grid container alignjustify='center'>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/hammer-8_275x.jpg?v=1578403932"
          image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_17eb1b85-c0c3-4d62-975b-4f0842f87837_275x.jpg?v=1578398999"
          />
        </Grid>


      </Grid>
      <Customers /> 

  <Footer />
    </div>
  );
}

export default App;
