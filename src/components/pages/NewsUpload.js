import React, { Component } from "react";
import { connect } from "react-redux";
import { createNews } from "../../actions";

class NewsUpload extends Component {

  state = {
  }

  onChangeHandler = (event) => {
    this.setState({
        image: event.target.files[0]
    })
  }

  onInputChange = (field, event) => {

    this.setState({
      [field]: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("period", this.state.period);
    data.append("title", this.state.title);
    data.append("paragraph", this.state.paragraph);
    data.append("button", this.state.button);
    data.append("link", this.state.link);
    data.append("file", this.state.image);

    this.props.createNews(data)
      .then(() => {

        this.props.fetchNews()
        .catch(err => {
            console.log(err);
        })
        .then(data => {
          this.props.toggleCreation()
        })

          
      })
      .catch(err => {
          console.log(err);
      })
  }

  render(){
    return(
            <div>
              <h3>Add a news</h3>
              <form onSubmit={this.onFormSubmit} className="generic-form">
                  <label htmlFor="period">Period</label>
                  <input type="text" name="period"
                    onChange={(event) => this.onInputChange("period", event)}
                  />

                  <label htmlFor="title">News title</label>
                  <input type="text" name="title"
                    onChange={(event) => this.onInputChange("title", event)}
                  />

                  <label htmlFor="paragraph">Paragraph</label>
                  <textarea name="paragraph" rows="6"
                    onChange={(event) => this.onInputChange("paragraph", event)}
                  ></textarea>

                  <label htmlFor="button">Button caption</label>
                  <input type="text" name="button"
                    onChange={(event) => this.onInputChange("button", event)}
                  />

                  <label htmlFor="link">Link</label>
                  <input type="text" name="link"
                    onChange={(event) => this.onInputChange("link", event)}
                  />

                  <label htmlFor="image">Background</label>
                  <input type="file" name="image" onChange={this.onChangeHandler} />

                  <input type="submit" value="Create" />
                  
              </form>
          </div>
    )
  }

}

export default connect(null, { createNews })(NewsUpload);
  