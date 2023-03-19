import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#41365b'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{color:'#e1cebf',marginLeft:'30px',letterSpacing:'2px'}}>Lilah</a>
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item mx-4">
                      <Link className="nav-link active" aria-current="page" href="/" style={{color:'#e1cebf'}} to="/">Home</Link>
                      </li>
                      <li className="nav-item mx-4">
                      <Link className="nav-link" href="/" style={{color:'#e1cebf'}} to="/daily">Daily Affirmations</Link>
                      </li>
                      <li className="nav-item mx-4">
                      <Link className="nav-link" href="/" style={{color:'#e1cebf'}} to="/about">About Us</Link>
                      </li>
                      <li className="nav-item mx-4">
                      <Link className="nav-link" href="/" style={{color:'#e1cebf'}} to="/feedback">Feedback</Link>
                      </li>
                      <Link to="http://localhost:8080/index.php"><button type="button" className="btn btn-dark mx-5" style={{color:'#e1cebf',backgroundColor:'#241e2b'}}>Start Now</button></Link>
                    </ul>
            </div>
        </nav>
      </div>
    )
  }
}
