import React, { Component } from "react";
import { connect } from "react-redux";
import { createLink, editLink } from "../../actions";

class FileUpload extends Component {

  state = {
    selectedFile: null,
    linkName: null
  }

  componentDidMount() {
    this.setState({
      linkName: this.props.file.linkName
    })
  }

  onChangeHandler = (event) => {
    this.setState({
        selectedFile: event.target.files[0]
    })
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const {file, createLink, editLink, history} = this.props;



    if (!file.linkId) {
      
      const data = new FormData();
      data.append("name", this.state.linkName);
      data.append("file", this.state.selectedFile);
      data.append("id", file.sectionId);

      createLink(data)
        .then(() => {
            history.go(-2)
        })
        .catch(err => {
            console.log(err);
        })

    } else {

      editLink(file.linkId,
        {
          name: this.state.linkName
        })
        .then(() => {
          history.go(-2);
        })
        .catch(err => {
            console.log(err);
        })
    }
  }

  render() {

    const {history, file} = this.props;

    const title = file.linkId ? "Edit Document" : "New Document";

    return(
      <>

        <div className="row" >
          <div className="container">

            <h1>{title}</h1>
            
            <form onSubmit={this.onFormSubmit} className="generic-form">

              <label htmlFor="page">Destination page</label>
              <input type="text" name="page" value={file.pageName} disabled/>

              <label htmlFor="section">Destination section</label>
              <input type="text" name="section" value={file.sectionName} disabled/>

              <label htmlFor="name">Document name</label>
              <input type="text" name="fileName" defaultValue={file.linkName} onChange={(event) => this.onInputChange("linkName", event)}/>

              <label htmlFor="file">link Upload</label>
              <input type="file" name="file" onChange={this.onChangeHandler} />

              <input type="submit" value="Apply" />

            </form>

            <a href="##" onClick={()=>{ history.go(-2); return false; }}>Back</a>

          </div>
        </div>

      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
      file: state.file
  }
}

export default connect(mapStateToProps, { createLink, editLink })(FileUpload);
