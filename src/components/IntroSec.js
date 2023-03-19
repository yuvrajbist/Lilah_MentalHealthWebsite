import React, { Component } from 'react'
import Image from './laveige3cropped.jpg'
import Info from './Info.js';

export default class IntroSec extends Component {
  render() {
    return (
      <>
      <div className='bg-image' style={{backgroundImage:`url(${Image})`,height:'35.5em',backgroundPosition:'bottom',backgroundSize:'cover'}}>
        <div className="container mx-1 h-100">
            <div className="row" style={{padding:'9rem 2rem'}}>
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <h2 style={{textAlign:'left',color:'#41365b'}}>We got your back :)</h2>
                    <p style={{textAlign:'left',color:'#41365b'}}>Welcome to Lilah - a vibrant space for all things mental health! We're here to help you tap into your inner groove and prioritize your well being like a boss!</p>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                </div>
            </div>
        </div>
      </div>
      <Info/>
      </>
    )
  }
}
