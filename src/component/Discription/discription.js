import React, { Component } from "react";
  import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

  class TabsDefault extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <MDBContainer >
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Review
            </MDBNavLink>
          </MDBNavItem>
         
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <h2>Product Description:</h2>
            <p className="mt-2">
            Each hairspray shaped canister turns into a fabulous salon chair to get your L.O.L. dolls hair in tip top shape. The canister also transforms into a doll stand, display case or even a super cute purse to carry your #Hairgoals dolls around.</p>
            <p className="mt-2">
            Hairgoals Wave 2 adds tonnes of new faces to the Makeover Series universe, including the addition of a Makeover Series boy lol. How exciting!?</p>
            <p className="mt-2">
            Each hairspray shaped canister turns into a fabulous salon chair to get your L.O.L. dolls hair in tip top shape. The canister also transforms into a doll stand, display case or even a super cute purse to carry your #Hairgoals dolls around.</p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
           
          </MDBTabPane>
         
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabsDefault;