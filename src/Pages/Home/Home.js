import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import Loader from "../../Component/Loader/Loader";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - Newsology`
    updateNews();
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


  return (
    <>
      <h2 className="text-center my-3" style={{ margin: '35px 0px', marginTop: '90px' }}>Newsology Top  {capitalizeFirstLetter(props.category)} headlines</h2>
      {loading && <Loader />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row ">
            {articles.map((item) => {
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
        </div>
      </InfiniteScroll>
    </>
  );

}

Home.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

Home.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Home;
