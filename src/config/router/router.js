import React from "react";
import {
  BrowserRouter as Router,
  Route} from "react-router-dom";
import {Home ,Babytoy , Blog ,FlashSale ,NewArrival,ToysForBoys,ToysForGirls ,Vehicles ,WinterBigSales,Mycart} from './../../container'


  export default function App() {
    return (
      <Router>
            <Route path="/" exact component = {Home} />
            <Route path="/babytoy" component = {Babytoy} />
            <Route path="/blog" component = {Blog} />
            <Route path="/flashsale" component = {FlashSale} />
            <Route path="/newarrival" component = {NewArrival} />
            <Route path="/toysforboys" component = {ToysForBoys} />
            <Route path="/toysforgirls" component = {ToysForGirls} />
            <Route path="/vehicles" component = {Vehicles} />
            <Route path="/winterbigsale" component = {WinterBigSales} />
            <Route path="/mycart" component = {Mycart} />

            
      </Router>
    );
  }


  