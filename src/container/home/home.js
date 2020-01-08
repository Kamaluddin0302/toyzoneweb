import React from 'react';
import Cards from '../../component/card/card';
import Topbar from './../../component/Topbar/Topbar'
import Navbar from '../../component/Navbar/Navbar';
import Slider from '../../component/Slider/Slider';
import Header from './../../component/Header/Header'
import ImageSlider from './../../component/catagryslider/catagryslider'
import CardSlider from './../../component/catagryslider/cardcatagry'
import Footer from './../../component/footer/footer'
import Customers from './../../component/social/social'
import './home.css'



function App(props) {
  return (
    <div className="App">
      <div className='navbar'>
      <Header />
      <Topbar />
      <Navbar history = {props.history} />

      </div>
      <div>
      <Slider />
      <div style = {{padding : "2%"}}>
        <h1>Popular Categories</h1>
      <ImageSlider /> 
      </div>
      <div style = {{padding : "2%"}}>
        <h1>Flash Deals ⛈️</h1>
      <CardSlider image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_275x.jpg?v=1578057758" 
    image2 ="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/71KIFd18MmL._AC_SL1500_275x.jpg?v=1578058323"/> 
      </div>   
      <div style = {{padding : "2%"}}>
        <h1>New Arrivals</h1>
      <CardSlider image1 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Triceratops-2_275x.jpg?v=1578397366"
      image2 = "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Parasaurolophus-4_275x.jpg?v=1578396946"
      /> 
      </div>     
  </div>
  <Customers /> 
  

  <Footer />

  
    </div>
  );
}

export default App;
