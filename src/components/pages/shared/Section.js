import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteLink, setLink } from "./../../../actions";

class Section extends Component {

  onHandleLink(pageName, section, link) {

      const {setLink, history} = this.props;

      if(!link) {
        link = {
            _id: null,
            name: null,
            url: null
        } 
      }

      setLink({
        pageName,
        sectionId: section._id,
        sectionName: section.name,
        linkId: link._id,
        linkName: link.name,
        linkUrl: link.url
      });
      history.push("/fileupload");
  }

  onDeleteLink(id) {
        
    this.props.deleteLink(id)
        .catch(err => {
            console.log(err);
        })

    return false;
  }

    render() {

      const {section, pageName} = this.props;

        return(

          <>
              <h3>{section.name}</h3>
              <ul className="section-record">
                  {
                      section.links.map(link => {
                          return (
                              <li key={link._id} className="link-record">
                                  <ul>
                                      <li key={`name-${link._id}`}><span>{link.name}</span></li>
                                      <li key={`edit-${link._id}`}><a href="##" onClick={()=>{return this.onHandleLink(pageName, section, link);}}><img src="./img/icon-edit.png" className="icon" alt="icon" /></a></li>
                                      <li key={`delete-${link._id}`}><a href="##" onClick={()=>{return this.onDeleteLink(link._id);}}><img src="./img/icon-delete.png" className="icon" alt="icon" /></a></li>
                                  </ul>
                              </li>
                          )
                      })
                  }
                  <li className="link-record">
                      <ul>
                          <li>
                              <a href="##" className="expand-center" onClick={()=>{return this.onHandleLink(pageName, section);}}><img src="./img/icon-add.png" className="icon" alt="icon" /></a>
                          </li>
                      </ul>
                  </li>
              </ul>
          </>
      )
    }
}

export default connect(null, { deleteLink, setLink })(Section);