import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
    const { token, ...rest } = props;

    if (!token) {
        return <Redirect to="/" />
    }
    
    return (
        <Route {...rest} />
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(PrivateRoute);