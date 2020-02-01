import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPages, deleteLink } from "./../../actions";

class Childcare extends Component {

    componentDidMount() {

        this.props.fetchPages()
            .then(() => {
                console.log("Pages fetched");
            })
            .catch(err => {
                console.log(err);
            })
    }

    onDeleteLink(id) {
        
        this.props.deleteLink(id)
            .then(() => {
                console.log("Pages re-fetched after deletion");
            })
            .catch(err => {
                console.log(err);
            })

        return false;
    }

    render() {

        let [page] = this.props.pages.filter(page => {
            return (page.name === "Childcare")
        });

        const currSections = page && page.sections;

        [page] = this.props.pages.filter(page => {
            return (page.name === "Common")
        });

        const commonSections = page && page.sections;

        return (
            <>
                <div className="row" >
                    <div className="container">
                        <h1>Childcare</h1>

                        { currSections && currSections.map((section, idx) => {
                            return <div key={`div-section-${idx}`}>
                                <h3 key={`h3-section-${idx}`}>{section.name}</h3>
                                <ul key={`ul-section-${idx}`} className="section-record">
                                    {
                                        section.links.map(link => {
                                            return (
                                                <li key={link._id} className="link-record">
                                                    <ul>
                                                        <li key={`name-${link._id}`}><span>{link.name}</span></li>
                                                        <li key={`edit-${link._id}`}><a href="##"><img src="./img/icon-edit.png" className="icon" alt="icon" /></a></li>
                                                        <li key={`delete-${link._id}`}><a href="##" onClick={()=>{return this.onDeleteLink(link._id);}}><img src="./img/icon-delete.png" className="icon" alt="icon" /></a></li>
                                                    </ul>
                                                </li>
                                            )
                                        })
                                    }
                                    <li className="link-record">
                                        <ul>
                                            <li>
                                                <a href="##" className="expand-center"><img src="./img/icon-add.png" className="icon" alt="icon" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        })
                        }

                        {
                        commonSections && commonSections.map((section, idx) => {
                            return <div key={`div-section-${idx}`}>
                                <h3 key={`h3-section-${idx}`}>{section.name}</h3>
                                <ul key={`ul-section-${idx}`} className="section-record">
                                    {
                                        section.links.map(link => {
                                            return (
                                                <li key={link._id} className="link-record">
                                                    <ul>
                                                        <li key={`name-${link._id}`}><span>{link.name}</span></li>
                                                        <li key={`edit-${link._id}`}><a href="##"><img src="./img/icon-edit.png" className="icon" alt="icon" /></a></li>
                                                        <li key={`delete-${link._id}`}><a href="##" onClick={()=>{return this.onDeleteLink(link._id);}}><img src="./img/icon-delete.png" className="icon" alt="icon" /></a></li>
                                                    </ul>
                                                </li>
                                            )
                                        })
                                    }
                                    <li className="link-record">
                                        <ul>
                                            <li>
                                                <a href="##" className="expand-center"><img src="./img/icon-add.png" className="icon" alt="icon" /></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        })
                        }

                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.pages
    }
}

export default connect(mapStateToProps, { fetchPages, deleteLink })(Childcare);