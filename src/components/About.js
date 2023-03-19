import React, { Component } from 'react'
import InfoCard from './InfoCard'
import Image from './laveige4cropped.jpg'

export default class About extends Component {
  render() {
    return (
        <div style={{backgroundImage:`url(${Image})`,backgroundColor:'#4e415b',padding: '80px'}}>
        <div className="container">
            <h1 style={{color:'#41365b', marginBottom:'80px'}}>About Us</h1>
            <p style={{margin:'100px',color:'#41365b',backgroundColor:'rgba(225,206,191,0.8)'}}>Lilah, or "delicate beauty of the night" in Arabic, is a name chosen with great consideration. And hence, we ARE determined to build this platform for each one of us with utmost care. Lilah is one of the greatest innovations that will lead to optimistic changes in the lives of each one of us who have been sabotaged in the light of mental health issues. Let's have a look at people who make Lilah for what it is.</p>
            <div className="row my-5">
                <div className="col">
                    <InfoCard title='Yash Mohan' description='An IT Engineering student, Yash has always been very enthusiatic about giving his technical knowledge, a required shape which can contribute to betterment. For Lilah, he has worked as a Frontend Developer and Designer. ' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='Shivantika Tripathi' description='A CS student who is excited about putting out designs and content in ways to reach out to audiences of all kinds and be able to provide help. She heads Lilah. ' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='Yuvraj Bist' description='CS student and a coding enthusiast, Yuvraj is a determined personality who has virtues of keeping up even in the toughest of all. For Lilah, he has worked as a Full Stack Developer.' imageUrl='...' />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
