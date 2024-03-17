import React, { Component } from "react";
import Card from "../../Component/Card/Card";
import Loader from "../../Component/Loader/Loader";
import PropTypes from "prop-types";

export class Home extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }



  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c3bf49be705486291348c96d8a7ce7e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrev = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNext = async () => {
    this.setState({page: this.state.page + 1})
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center my-3">Newsology Top headlines</h2>
          {this.state.loading && <Loader />}
          <div className="row my-2">
            {!this.state.loading &&
              this.state.articles.map((item) => {
                return (
                  <div className="col-md-4 my-2" key={item.url}>
                    <Card
                      imageUrl={item.urlToImage}
                      title={item.title ? item.title : ""}
                      description={item.description ? item.description : ""}
                      newsUrl={item.url}
                      author={item.author}
                      date={item.publishedAt}
                      source={item.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
