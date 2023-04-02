import React from 'react'
import './Kocha.css'
import img2 from '../../images/2.png'
function Kocha() {
  return (
    <div className='Kocha'>
        <div className="j1">
            <h1>Learn Product Design in
16 weeks</h1>
        </div>
        <div className="p1">
            <p>Launch your Product Design career in just 16 weeks with Dribbble’s zero-to-career-ready Product Design course! Complete industry-relevant projects alongside a handpicked mentor, master essential design tools and practices, build an interview-ready portfolio, and get connected to a vast network of hiring managers.

</p>
        </div>
        <div className="text">
            <ul>
                <li><h4>Flexible learningNo need to quit your job with our mix of video & live learning.</h4></li>
                <li><h4>Mentorship
Attend live, weekly sessions with your design mentor.</h4></li>
                <li><h4>Industry relevant curriculum
Work on projects and gain relevant work experience.</h4></li>
            </ul>
        </div>
        <div className="image2">
            <img src={img2} alt="" />
        </div>
        <div className="btn2">
            <button>View course details</button>
        </div>
    </div>
  )
}

export default Kocha