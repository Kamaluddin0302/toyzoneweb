import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Topbar.css'
import Logo from './../../images/logo.webp'
import { FaSearch, FaPhone } from "react-icons/fa";

export default class SubHeader extends React.Component {
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item lg={1} xs={12}>

                    </Grid>
                    <Grid item lg={2} xs={12}>
                        <img src={Logo} width="100%" height="50px" />
                    </Grid>
                    <Grid item lg={4} xs={10}>
                        <div className="input-group">
                            <input style={{backgroundColor: '#e6e6e6'}} type="text" className="form-control" placeholder="Search Your Products Here . . . ." aria-label="Username" aria-describedby="basic-addon" />
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon" style={{backgroundColor: '#51ba72', color: 'white'}}>
                                    <FaSearch />
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={5} xs={10}>
                        <div className="contactSec">
                            <p>Need Suppot?</p>
                            <p><FaPhone /><span style={{color: "#5cb85c"}}> 03211222869</span></p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}