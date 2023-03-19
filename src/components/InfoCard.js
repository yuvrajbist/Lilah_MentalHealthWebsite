import React, { Component } from 'react'
import Image from './lavenderbar.jpg'

export default class InfoCard extends Component {
  render() {
    let {title,description,imageUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: '18rem',backgroundColor:'#8c75a3',boxShadow:'rgba(0, 0, 0, 0.60) 1.95px 1.95px 2.6px'}}>
            <img src={!imageUrl? imageUrl:Image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3>{title}</h3>
                <p className="card-text">{description}</p>
            </div>
        </div>
      </div>
    )
  }
}
