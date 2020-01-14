import React from "react";
import Commmercecart from './../../component/commercecart/commercecart'
import Topbar from './../../component/Topbar/Topbar'
import Header from './../../component/Header/Header'
import Footer from './../../component/footer/footer'
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            productCard: [],
            totalPrice: 0
        };
    }
    render() {
        return (
            <div className="App">
                <div>
                <Header history = {this.props.history}/>
                    <Topbar />
                </div>
                <div style = {{marginBottom : "20vh"}}>
                <Commmercecart  history = {this.props.history}/>
                </div>
                <Footer /> 
            </div>
        );
    }
}
export default Home;
