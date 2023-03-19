import React, { Component } from 'react'
import InfoCard from './InfoCard'
import Image from './laveige2cropped.png'

export default class Daily extends Component {
  render() {
    return (
        <div style={{backgroundImage:`url(${Image})`,backgroundSize:'cover',backgroundPosition:'bottom',backgroundColor:'#4e415b',padding: '80px'}}>
        <div className="container">
            <h1 style={{marginBottom:'80px',color:'#e1cebf',textShadow:'rgba(0, 0, 0, 0.60) 1.95px 1.95px 2.6px'}}>Daily Affirmations</h1>
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
            <div className='row my-5'>
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
            <div className='row my-5'>
                <div className="col">
                    <InfoCard title='' description='I deserve the best.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I am enough.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='Though these times are difficult, they are only a short phase of my life.' imageUrl='...' />
                </div>
            </div>
            <div className='row my-5'>
                <div className="col">
                    <InfoCard title='' description='I am proud of how far I have come.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I believe in the person I am becoming.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='My possibilities are endless.' imageUrl='...' />
                </div>
            </div>
            <div className='row my-5'>
                <div className="col">
                    <InfoCard title='' description='My thoughts become my realities.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I let go of my limiting self-beliefs.' imageUrl='...' />
                </div>
                <div className="col">
                    <InfoCard title='' description='I know my worth and my own choices.' imageUrl='...' />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
