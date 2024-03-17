import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let { key, title, description, imageUrl, newsUrl, author, date, source } = this.props
    return (
      <>
        <div>
          <div className="card " key={key}>
            <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2024/02/market_up_higher-1-770x433.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {source}
              </span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-dark">Read more</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
