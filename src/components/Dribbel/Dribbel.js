import React from 'react'
import './Dribbel.css'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'

function Dribbel() {
    return (
        <div className="connect">
            <div className='colectin'>
                <h1>Portfolio creation</h1>
                <h1>and maintenance</h1>
                <h1>made easy</h1>
                <p>Dribbble Pro makes it easy for you to spend your time designing and not</p>
                <p>updating your portfolio.</p>
                <p>When you sign up for Dribbble Pro, you can create your own portfolio</p>
                <p>site instantly from the work you've shared on Dribbble. When you upload</p>
                <p>your work to your Dribbble profile, it seamlessly updates on your very</p>
                <p>own portfolio site. It's that simple to have an always up-to-date portfolio.</p>
                <p>No coding required.</p>
                <div className='img'>
                    <img className='img3' src={img3} alt="" />
                    <img className='img2' src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Dribbel