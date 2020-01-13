import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.css'
import Popup from './popup'
import Badge from '@material-ui/core/Badge';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Grid container justify="center">
                    <Grid item lg={10}>
                    </Grid>
                    <Grid item lg={1} md={4} sm={6} xs={8}>
                        <div style={{ fontSize: '15px',fontWeight : "lighter", borderRight: "1px solid black" }}>
                            My Account
                        </div>
                    </Grid>
                    <Grid item lg={1} md={4} sm={6} xs={4}>
                            <Badge showZero	= {true} badgeContent={0} color="error" style = {{cursor: "pointer"}}>
                                <Popup history = {this.props.history}/>
                            </Badge>
                    </Grid>
                </Grid>
            </div>
        )
    }
}