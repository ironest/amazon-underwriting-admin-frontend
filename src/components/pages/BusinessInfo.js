import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInfo, setInfo } from "./../../actions";

class BusinessInfo extends Component {

  state = {
  }

  onInputChange = (field, subField, value, event) => {

    let info = {...this.state[field]};

    if (!subField){
      info[value] = event.target.value;
    } else {
      info[subField][value] = event.target.value;
    }

    this.setState({
      [field]: info
    })

  }

  onFormSubmit = (field, event) => {

    let info = {[field]: this.state[field]};

    this.props.setInfo(info)
      .then(data => {

        const { footer_info, childcare_info, hbb_info, accident_info, contact_info } = this.props.info;

        this.setState({
          childcare_info,
          hbb_info,
          accident_info,
          contact_info,
          footer_info
        })
      })
      .catch(err => {
        console.log(err);
      })

  }

  componentDidMount() {

    this.props.fetchInfo()
        .catch(err => {
            console.log(err);
        })
        .then(data => {

          const { footer_info, childcare_info, hbb_info, accident_info, contact_info } = this.props.info;

          this.setState({
            childcare_info,
            hbb_info,
            accident_info,
            contact_info,
            footer_info
          })
        })
  }

  render() {

    const { footer_info, childcare_info, hbb_info, accident_info, contact_info } = this.state;
  
    const entries = [
      { title: "Childcare", key: "childcare_info" },
      { title: "Home Based Businesses", key: "hbb_info" },
      { title: "Personal Accident", key: "accident_info" },
      { title: "Contact", key: "contact_info" },
    ]

    return (
        <>
            <div className="row" >
                <div className="container">
                    <h1>Business Info</h1>

                    {   childcare_info && [childcare_info, hbb_info, accident_info, contact_info]
                            .map((info, idx) => {
                                return <div key={idx}>
                                            <h3>{entries[idx].title} Tab</h3>
                                            <form onSubmit={(event)=>{event.preventDefault(); this.onFormSubmit(entries[idx].key, event)}} className="generic-form">
                                                <label htmlFor="tel">Telephone</label>
                                                <input type="tel" name="tel" defaultValue={info.tel} onChange={(event) => this.onInputChange(entries[idx].key, null, 'tel', event)} />
                                                <label htmlFor="tel">Email</label>
                                                <input type="email" name="email" defaultValue={info.email} onChange={(event) => this.onInputChange(entries[idx].key, null, 'email', event)} />
                                                <input type="submit" value="Save" />
                                            </form>
                                       </div>
                            })
                    }

                    <h3>Footer Details</h3>
                    {
                        footer_info &&
                        <form onSubmit={(event)=>{event.preventDefault(); this.onFormSubmit("footer_info", event)}} className="generic-form">
                            <label htmlFor="website">Website Name</label>
                            <input type="text" name="website" defaultValue={footer_info.website.name}
                              onChange={(event) => this.onInputChange("footer_info", "website", "name", event)} 
                            />

                            <label htmlFor="url">Website Url</label>
                            <input type="text" name="url" defaultValue={footer_info.website.url}
                              onChange={(event) => this.onInputChange("footer_info","website", "url", event)} 
                            />
                            
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" defaultValue={footer_info.address}
                              onChange={(event) => this.onInputChange("footer_info", null, "address", event)} 
                            />

                            <label htmlFor="afsl">AFSL</label>
                            <input type="text" name="afsl" defaultValue={footer_info.AFSL}
                              onChange={(event) => this.onInputChange("footer_info", null, "AFSL", event)} 
                            />
                            
                            <label htmlFor="abs">ABN</label>
                            <input type="text" name="abn" defaultValue={footer_info.ABN}
                              onChange={(event) => this.onInputChange("footer_info", null, "ABN", event)} 
                            />
                            
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

export default connect(mapStateToProps, { fetchInfo, setInfo })(BusinessInfo);