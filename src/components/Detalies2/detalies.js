import React from 'react'
import './detalies.css'
import img2 from '../../images/2.png'

function Detalies() {
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
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Detalies