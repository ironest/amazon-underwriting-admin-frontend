import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews, setNews, deleteNews } from "./../../actions";
import NewsUpload from "./NewsUpload";

class Newsletter extends Component {

  state = {
    isCreating: false
  }

  toggleCreation = () => {
    this.setState({isCreating: !this.state.isCreating})
  }

  onInputChange = (index, field, event) => {

    let entries = [...this.state.news];
    entries[index][field] = event.target.value

    this.setState({
      news: entries
    })

  }

  onFormDelete = (index) => {

    console.log("onFormDelete")

    let data = this.state.news[index];

    this.props.deleteNews(data._id)
      .then(data => {
        this.setState({
          news: [...this.props.news]
        })
      })
      .catch(err => {
        console.log(err);
      })

  }

  onFormSubmit = (index) => {

    let data = this.state.news[index];

    this.props.setNews(data._id, data)
      .then(data => {
        this.setState({
          news: [...this.props.news]
        })
      })
      .catch(err => {
        console.log(err);
      })

  }

  componentDidMount() {
    this.props.fetchNews()
      .catch(err => {
          console.log(err);
      })
      .then(data => {
        this.setState({
          news: [...this.props.news]
        })
      })
  }

  render() {

    const { news, isCreating } = this.state;
    const { fetchNews } = this.props;

    return <>
            <div className="row" >
              <div className="container">
                  <h1>Newsletter</h1>

                  { isCreating &&
                    <NewsUpload
                      toggleCreation={this.toggleCreation}
                      fetchNews={fetchNews}
                    />
                  }
                  {
                    isCreating &&
                    <a href="##" onClick={this.toggleCreation} className="link-btn">
                      Cancel
                    </a>
                  }

                  {   !isCreating &&
                      news &&
                      news.map((post, idx) => {
                        return <div key={idx}>
                                    <h3>Post #{idx+1} </h3>
                                    <form className="generic-form">
                                        <label htmlFor="period">Period</label>
                                        <input type="text" name="period"
                                          defaultValue={post.period}
                                          onChange={(event) => this.onInputChange(idx, "period", event)}
                                        />

                                        <label htmlFor="title">News title</label>
                                        <input type="text" name="title"
                                          defaultValue={post.title}
                                          onChange={(event) => this.onInputChange(idx, "title", event)}
                                        />

                                        <label htmlFor="paragraph">Paragraph</label>
                                        <textarea name="paragraph" rows="6"
                                          defaultValue={post.paragraph}
                                          onChange={(event) => this.onInputChange(idx, "paragraph", event)}
                                        ></textarea>

                                        <label htmlFor="button">Button caption</label>
                                        <input type="text" name="button"
                                          defaultValue={post.button}
                                          onChange={(event) => this.onInputChange(idx, "button", event)}
                                        />

                                        <label htmlFor="link">Link</label>
                                        <input type="text" name="link"
                                          defaultValue={post.link}
                                          onChange={(event) => this.onInputChange(idx, "link", event)}
                                        />

                                        <label htmlFor="image">Background</label>
                                        <div className="preview-news-bg" style={{backgroundImage: `url(${post.image})`}}></div>

                                        <input type="submit" value="Save"
                                          onClick={(event)=>{event.preventDefault(); this.onFormSubmit(idx)}} />
                                        <input type="submit" value="Delete"
                                          onClick={(event)=>{event.preventDefault(); this.onFormDelete(idx)}} />
                                        
                                    </form>
                                </div>
                    })
                    }

                  { !isCreating &&
                    <a href="##" onClick={this.toggleCreation} className="link-btn">
                      <img src="./img/icon-add.png" alt="" />
                    </a>
                  }

              </div>
            </div>
           </>
  }

}

  const mapStateToProps = (state) => {
    return {
      news: state.news
    }
}

export default connect(mapStateToProps, { fetchNews, setNews, deleteNews })(Newsletter);