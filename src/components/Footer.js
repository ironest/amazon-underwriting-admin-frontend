import React, { Component } from "react";
// import HomePage from "./pages/HomePage";

class Footer extends Component {
    render() {
        return(
            <footer className="footer" >
                <div className="to-left" >
                {/* <link to="/" component={HomePage}></link> */}
                <p>52 Chisholm Street, Darlinghurst NSW 2010</p>
                <p>AFSL 482029  |  ABN 17 605 879 507</p>
                </div>
                <div className="to-right" >
                    <p>Copyright © 2016 Amazon Underwriting</p>
                    <p>Pty Ltd</p>
                </div>
            </footer>
        )
    }
}

export default Footer;