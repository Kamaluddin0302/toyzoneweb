
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './social.css'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
   
    return (
      <div>
        
        <Slider {...settings}>
          <div>
          <div className="testimonial-author clearfix">
             <div className="testimonial-author-thumbnail img-thumbnail">
               <img
                  src="https://cdn.shopify.com/s/files/1/0272/0409/1949/files/Review-2.png?v=1575301924"
                  data-sizes="auto"
                  data-parent-fit="contain"
                  height="89"
                  width="89"
                  alt=""
                  className="img-rounded lazyautosizes lazyloaded"
                  sizes="89px"
                />
              </div>
              <div className="testimonial_right">
						 	<p className="blockquote"><span>"</span>Toyzone is one of the finest<br />      toy shop in Pakistan<span>"</span></p>
						     <p className="autor_name">Shaheena</p>
						 </div></div>

          </div>
          <div>
          <div className="testimonial-author clearfix">
             <div className="testimonial-author-thumbnail img-thumbnail">
               <img
                  src="https://cdn.shopify.com/s/files/1/0272/0409/1949/files/Review-2.png?v=1575301924"
                  data-sizes="auto"
                  data-parent-fit="contain"
                  height="89"
                  width="89"
                  alt=""
                  className="img-rounded lazyautosizes lazyloaded"
                  sizes="89px"
                />
              </div>
              <div className="testimonial_right">
						 	<p className="blockquote"><span>"</span>Toyzone is one of the finest<br />      toy shop in Pakistan<span>"</span></p>
						     <p className="autor_name">Shaheena</p>
						 </div></div>
          </div>
          <div>
          <div className="testimonial-author clearfix">
             <div className="testimonial-author-thumbnail img-thumbnail">
               <img
                  src="https://cdn.shopify.com/s/files/1/0272/0409/1949/files/Review-2.png?v=1575301924"
                  data-sizes="auto"
                  data-parent-fit="contain"
                  height="89"
                  width="89"
                  alt=""
                  className="img-rounded lazyautosizes lazyloaded"
                  sizes="89px"
                />
              </div>
              <div className="testimonial_right">
						 	<p className="blockquote"><span>"</span>Toyzone is one of the finest<br />      toy shop in Pakistan<span>"</span></p>
						     <p className="autor_name">Shaheena</p>
						 </div></div>
          </div>
         
        </Slider>
      </div>
    );
  }
}
