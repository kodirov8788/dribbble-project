import React from 'react'
import './dribel.css'
import img5 from '../../images/5.png'
import img1 from '../../images/qol.png'
import img4 from '../../images/4.png'

function Dribel() {
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
                    <img className='img1' src={img1} alt="" />
                    <img className='img4' src={img4} alt="" />
                    <img className='img5' src={img5} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Dribel