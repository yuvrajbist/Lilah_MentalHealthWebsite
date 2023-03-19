import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from './logo.jpeg'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#41365b'}}>
            <div className="container-fluid">
                <img className="navbar-brand" src={Image} alt='...' style={{color:'#e1cebf',marginLeft:'25px',width:'50px'}}></img>
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
                      <Link to="http://localhost:8080/index.php"><button type="button" className="btn btn-dark mx-3" style={{color:'#e1cebf',backgroundColor:'#241e2b'}}>Start As Listener</button></Link>
                      <Link to="http://localhost:8080/index.php"><button type="button" className="btn btn-dark mx-5" style={{color:'#e1cebf',backgroundColor:'#241e2b'}}>Start As Speaker</button></Link>
                    </ul>
            </div>
        </nav>
      </div>
    )
  }
}
