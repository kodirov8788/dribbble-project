import React from 'react'
import './Detalis.css'
import img1 from '../../images/1.png'

function Detalis() {
    return (
        <div>
            <div className="card">
                <div className="card1">
                    <h1>Invest in your</h1>
                    <h1>design career</h1>
                    <h1>with Dribbble Pro.</h1>
                    <p>With Pro and Pro Business you get the tools you need to build</p>
                    <p>your design career.</p>
                </div>
                <div className="card2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Detalis