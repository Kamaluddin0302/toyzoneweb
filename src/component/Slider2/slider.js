import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width='70%' >
                <div > 
                    <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Capture_large.jpg?v=1578057758" alt = "" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_large.jpg?v=1578057758" alt = ""/>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/olo_large.jpg?v=1578057758" alt = ""/>
                </div>
             </Carousel>
        )
    }
}

export default DemoCarousel
