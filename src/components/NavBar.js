import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="nav-div" >
                <Link to="/">
                    HomePage
                </Link>
                <Link to="/childcare">
                    Childcare
                </Link>
                <Link to="/homebasedbusinesses">
                    Home Based Businesses
                </Link>
                <Link to="/personalaccident">
                    Personal Accident
                </Link>
                <Link to="/fileupload">
                    File Upload
                </Link>
                <Link to="/businessinfo">
                    Businesses Info
                </Link>
                <Link to="/newsletter">
                    Newsletter
                </Link>
            </div>
        )
    }
}

export default NavBar;