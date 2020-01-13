import React from "react";
import Popup from "reactjs-popup";
import './popup.css'
import Cart from './../../images/cart.png'
import { MdShoppingCart} from "react-icons/md";
import Button from '@material-ui/core/Button';

let array = [1,2,3,4]

export default class PopupCop extends React.Component {

    render() {
        return (
            <Popup  className = "popup-content" trigger={<img src={Cart} height="20" width="23" alt = "icon"/>}
                on="hover" position="bottom right" curser = "pointer">


                <table className="table">
                    {array.length ? <div>
                        {array.map((val, ind) =>
                            <tr key = {ind}>
                                <td>
                                    <img width="70px" height="50" src={Cart} alt = "product"/>

                                </td>
                                <td>
                                    <span style={{ color: "black", fontSize: "20px" }}>Image</span>

                                </td>
                                <td>
                                    <span style={{ color: "#3f51b5", fontSize: "20px" }}>1200</span>

                                </td>

                                <td>
                                    <span style={{ color: "#3f51b5", fontSize: "20px" }}>15</span>

                                </td>

                            </tr>
                        )}

                        <span>
                            <Button size="large"
                                style={{ color: "#fff", backgroundColor: "#9C27B0", marginTop: "30px", curser: 'pointer' }}
                                onClick={() => this.props.history.push("/mycart")}
                            >
                                <MdShoppingCart />  View Cart
   </Button></span>

                    </div>
                        :
                        <div style={{ color: 'black', fontSize: "15px" }}>There is no any product</div>}

                </table>
            </Popup>
        )
    }
}