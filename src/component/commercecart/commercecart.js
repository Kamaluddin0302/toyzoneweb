import React from 'react';
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from "react-icons/md";
import { MDBBtn, MDBIcon } from "mdbreact";


const Array = [1, 1]
export default function PaperSheet(props) {
    return (
        <div>

            <MDBBtn color="green" style={{ marginBottom: "5vh",marginRight: "10%", float: "right", backgroundColor: "green", color: "white", width: "10%", height: "7vh", fontWeight: "bold" }}>
                <MDBIcon icon="lock" className="mr-1" />CheckOut
      </MDBBtn>
            <div style={{ justifyContent: "center" ,marginLeft: "10%",marginRight: "10%"}}>

                <table class="table">
                    <thead style={{ backgroundColor: "#f9f9f9", color: 'black' }}>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col" style={{ width: "30%", textAlign: "left" }}>Product Description	</th>
                            <th scope="col">Quantity	</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.length ?
                            Array.map((val, ind) =>
                                <tr >
                                    <th scope="row" >
                                        <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/cullinan_medium.jpg?v=1574376009"
                                            alt="profile" style={{ width: "60px" }} /></th>
                                    <td style={{ textAlign: "left" }}>Metal Body Diecast Rolls Royce Cullinan With Light And Sound
                                        Add Number Plates : SINGLE NUMBER PLATE - RS.300</td>
                                    <td>
                                        <div style={{
                                            display: 'flex', border: '1px solid', justifyContent: "space-between",
                                            width: "50%",
                                        }}>
                                            <button style={{ height: "35px", outline: "none", border: "none", width: "35%", color: 'black', backgroundColor: "#f8f8f8" }}>-</button>
                                            <span style={{ color: "black", marginTop: "4px", fontSize: "20px", textAlign: "center" }}>0</span>
                                            <button style={{ height: "35px", width: "35%", color: 'black', outline: "none", border: "none", backgroundColor: "#f8f8f8" }} > + </button>
                                        </div>

                                    </td>
                                    <td>39</td>
                                    <td>30495</td>
                                    <td><img src="https://img.icons8.com/color/48/000000/delete-sign.png"
                                        onClick={() => props.onClick(ind)}
                                        style={{ width: '30px', cursor: 'pointer' }} alt = ""/></td>
                                </tr>)
                            :
                            <h3 style={{ textAlign: 'center', marginLeft: 600, marginTop: 50 }}>There is no any product</h3>}
                        {props.totalPrice ?
                            <tr>
                                <th colSpan="2" style={{ fontSize: '25px' }}>Total Price</th>
                                <th colSpan="2" style={{ fontSize: '25px' }}>498588</th>
                                <th colSpan="2" style={{ fontSize: '25px' }}>

                                    <Button size="large"
                                        style={{ color: "#fff", backgroundColor: "#9C27B0", curser: 'pointer' }}
                                    // onClick = {()=> history.push("/facebooklogin")}

                                    >
                                        <MdShoppingCart />Press Order
                                                    </Button>
                                </th>

                            </tr>
                            : <span></span>
                        }

                    </tbody>

                </table>
            </div>

            <MDBBtn color="green" style={{ marginTop: "5vh",marginRight: "10%", float: "right", backgroundColor: "green", color: "white", width: "10%", height: "7vh", fontWeight: "bold" }}>
                <MDBIcon icon="lock" className="mr-1" />CheckOut
      </MDBBtn>
        </div>
    );
}