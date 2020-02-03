import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInfo } from "./../../actions";

class BusinessInfo extends Component {

    componentDidMount() {

    this.props.fetchInfo()
        .catch(err => {
            console.log(err);
        })
    }

  render() {

    const { info } = this.props;
    
    const { footer_info, childcare_info, hbb_info, accident_info, contact_info } = info;
    const titles = ["Children", "Home Based Businesses", "Personal Accident", "Contact"]

    return (
        <>
            <div className="row" >
                <div className="container">
                    <h1>Business Info</h1>

                    {   childcare_info && [childcare_info, hbb_info, accident_info, contact_info]
                            .map((info, idx) => {
                                return <div key={idx}>
                                            <h3>{titles[idx]} Tab</h3>
                                            <form className="generic-form">
                                                <label htmlFor="tel">Telephone</label>
                                                <input type="tel" name="tel" defaultValue={info.tel} />
                                                <label htmlFor="tel">Email</label>
                                                <input type="email" name="email" defaultValue={info.email} />
                                                <input type="submit" value="Save" />
                                            </form>
                                       </div>
                            })
                    }

                    <h3>Footer Details</h3>
                    
                    {
                        footer_info &&
                        <form className="generic-form">
                            <label htmlFor="website">Website Name</label>
                            <input type="text" name="website" defaultValue={footer_info.website.name} />

                            <label htmlFor="url">Website Url</label>
                            <input type="text" name="url" defaultValue={footer_info.website.url} />
                            
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" defaultValue={footer_info.address} />

                            <label htmlFor="afsl">AFSL</label>
                            <input type="text" name="afsl" defaultValue={footer_info.AFSL} />
                            
                            <label htmlFor="abs">ABN</label>
                            <input type="text" name="abn" defaultValue={footer_info.ABN} />
                            
                            <input type="submit" value="Save" />
                        </form>
                    }

                </div>
            </div>
        </>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, { fetchInfo })(BusinessInfo);