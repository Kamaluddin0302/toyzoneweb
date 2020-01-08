import React from 'react';
import Cards from '../../component/card/card';
import Topbar from './../../component/Topbar/Topbar'
import Navbar from '../../component/Navbar/Navbar';
import Header from './../../component/Header/Header'
import Grid from '@material-ui/core/Grid';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Navbar history = {props.history}/>
       <Grid container alignjustify='center'>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>

        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Cards image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709" 
          image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
          />
        </Grid>



      </Grid>
    </div>
  );
}

export default App;
