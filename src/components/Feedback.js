import React, { Component } from 'react'
import './feedbk.css'

export default class Feedback extends Component {
  render() {
    return (
        <div className="container feedback">
        <form className='feedback'>
            <h1 className='feedback'> Give your Feedback</h1>
            <div className="id feedback">
                <input type="text" placeholder="Full name" />
                <i className="far fa-user"></i>
            </div>
            <div className="id feedback">
                <input type="email" placeholder="Email Address" />
                <i className="far fa-envelope"></i>
            </div>
                <textarea cols="15" rows="5" placeholder="Enter your opinions here.."></textarea>
                <button>Send</button>
        </form>
    </div>
    )
  }
}
