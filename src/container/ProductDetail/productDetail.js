import React from 'react';
import Discription from '../../component/Discription/discription'
import Slider from '../../component/Slider2/slider'
import Navbar from '../../component/Navbar/Navbar';
import Topbar from './../../component/Topbar/Topbar'
import Customers from './../../component/social/social'

import Footer from './../../component/footer/footer'

class CardExample extends React.Component {
    render() {
        return (
            <div>

                <div>
                <Topbar/>
                <Navbar history = {this.props.history}/>
                    <div style={{display : 'flex', width : '90%', marginTop : 40,padding : '30px' }}>
                        <div>
                            <Slider />
                        </div>
                        <div style={{ marginTop: '10px' ,}}>
                            <h2 style={{textAlign : 'left'}}>Pretend Play Fashion Briefcase With Shoulder Bag</h2>
                            <h3 style={{ color: "#59b8af",textAlign : 'left' }}>Rs: 1,450</h3>
                            <h3 style={{textAlign : 'left'}}>Quantity:</h3>

                            <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "30%" }}>
                                <button style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                                <h5 style={{ color: "#59b8af", marginTop: "2px", width: "10% ", textAlign: "center" }}>0</h5>
                                <button  style={{height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                            </div>
                        </div>
                    </div>
                    <Discription />
                </div>
                <div style = {{marginTop : "30vh"}}>
                <Customers/>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default CardExample;