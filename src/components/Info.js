import React, { Component } from 'react'
import InfoCard from './InfoCard'

export default class Info extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#4e415b',padding: '80px'}}>
        <div className="container">
            <h1 style={{color:'#e1cebf', marginBottom:'80px'}}>Daily Affirmations</h1>
            <div className="row my-5">
                <div className="col">
                    <InfoCard title='' description='I am capable of achieving my goals.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='Being honest frees me.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I am blessed with the love of people who choose to be with me.' imageUrl='...' />
                </div>
            </div>
            <div className='row'>
                <div className="col">
                    <InfoCard title='' description='I am a good listener.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I am grateful for everything.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I have immense positive energy.' imageUrl='...' />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
