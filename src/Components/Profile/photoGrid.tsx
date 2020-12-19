import React from 'react'
import image from '../feed/testpost.jpg';
import './photoGrid.scss';
export default function photoGrid() {
    return (
        <div className="d-flex justify-content-center">
      <div className="container">
            
            <div className="row">
                <div className="col">
                  <div className="gridImage">  <img src={image} alt="" /></div>
                </div>
                <div className="col">
                <div className="gridImage">  <img src={image} alt="" /></div>
                </div>
                <div className="col">
                <div className="gridImage">  <img src={image} alt="" /></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <div className="gridImage">  <img src={image} alt="" /></div>
                </div>
                <div className="col">
                <div className="gridImage">  <img src={image} alt="" /></div>
                </div>
                <div className="col">
                <div className="gridImage">  <img src={image} alt="" /></div>
                </div>
            </div>
        </div>
        </div>
    )
}
