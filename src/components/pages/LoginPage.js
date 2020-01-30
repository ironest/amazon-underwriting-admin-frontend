import React, { Component } from "react";
import LoginForm from "../form/LoginForm";

class LoginPage extends Component {
    render() {
        const { history } = this.props;
        return (
            <>
                <h1>Login Page</h1>
                <LoginForm history={history} />
            </>
        );
    }
}

export default LoginPage;