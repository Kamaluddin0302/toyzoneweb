import React from 'react';
import Button from '@material-ui/core/Button';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Grid from '@material-ui/core/Grid';
import "./login.css";
import Topbar from './../../component/Topbar/Topbar'
import Navbar from '../../component/Navbar/Navbar';
import Header from './../../component/Header/Header'
import Footer from './../../component/footer/footer'
import Customers from './../../component/social/social'
import { Link } from 'react-router-dom'
export default function Login(props) {
    return (
        <div>
            <div>
                <Header history={props.history} />
                <Topbar />
                <Navbar history={props.history} />
            </div>
            <Grid container justify="center">
                <Grid item xs={12} lg={4}>
                    <div>
                        <center>
                            <h4 className="first"> Acount Login </h4>
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#3b5998",
                                    color: "white",
                                    width: "98%",
                                    border: "1px solid #e0e0e0",
                                    margin: "0px 2px 6px 2px"
                                }}
                                disableElevation>
                                Login With Facebook
                                   <FaFacebookF style={{ marginLeft: "50%", color: "#white" }} />
                            </Button><br />
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#ce3d3d",
                                    color: "white",
                                    width: "98%",
                                    border: "1px solid #e0e0e0",
                                    margin: "0px 2px 6px 2px"

                                }}
                                disableElevation>
                                Login With Google
                                   <FaGoogle style={{ marginLeft: "50%", color: "white" }} />
                            </Button>
                            <br />
                            <input type="text" placeholder="Enter Your Email"
                                style={
                                    {
                                        width: "98%",
                                        margin: "0px 2px 6px 2px",
                                    }}
                                className="input" /><br />
                            <input type="text" placeholder="Enter Your Password"
                                style={
                                    {
                                        width: "98%",
                                        margin: "0px 2px 6px 2px",
                                    }}
                                className="input" /><br />
                        </center>
                        <input type="checkbox"
                            />
                        <span> Remember me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="#">Forget Password</Link></span>
                        <br /><br />
                        <input type="botton" value="SignIn"
                            style={{
                                textAlign: "center",
                                color: "white",
                                backgroundColor: "black",
                                width: "30%",
                                padding: "7px",
                                border: "none",
                                borderRadius: "5px",
                            }}
                        />
                        <br /><br />
                        <span> Don't have an account yet ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="signup">Create acount</Link></span>
                    </div>
                </Grid>
            </Grid>
            <div style={{ marginTop: '20vh' }}>
                <Customers />
                <Footer />
            </div>
        </div>
    );
}