import React from 'react'
import './Black.css'
import a4 from '../../images/4.png'
import a5 from '../../images/5.png'
import oxirgi from '../../images/6.png'
function Black() {
  return (
    <div>
        <div className="Black">
            <div className="text1">
                <h1>Learn alongside industry leading mentors</h1>
            </div>
            <div className="ppp">
                <p>You are not in this alone. As part of this course you’ll be matched with a mentor from our network. Mentors are hand-picked and have at least 4 years of product design experience in reputable design forward companies. Learn from the best in the space, create alongside them, and receive weekly live & asynchronous feedback on real-world projects.</p>
            </div>
            <div className="h2">
                <h2>The mentor network</h2>
            </div>
            <div className="a">
                <p>We have carefully curated a network of mentors who we trust and admire for their design career. We will match you with a mentor who is right for you, and who will provide support and guidance throughout your course.

You’ll meet with your mentor once a week in an intimate group session to learn key design concepts, ask questions, and discuss your projects. Your mentors will also be available throughout the weeks via online feedback and advice to take you from enrollment to graduation.Not only will you meet with your mentor once a week, in an intimate group session, to learn key design concepts, ask questions and discuss your projects, but they will also be available to you via online feedback and advice to take you from enrollment to graduation.</p>
            </div>
            <div className="image4">
                <img src={a4} alt="" />
            </div>
            <div className="each">
                <h1>Our mentors have worked with some of the world’s most influencial companies</h1>
            </div>
            <div className="image5">
            <img src={a5} alt="" />
            </div>
            <div className="each1">
                <h1>An immersive and interactive learning experience</h1>
            </div>
            <div className="f1">
                <p>Our courses are built with students’ experience in mind - proven learning principles, mentorship, community-based plus a year of Dribbble Pro; unlocking all the tools you need to transform your career.</p>
            </div>
            <div className="image6">
                <img src={oxirgi} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Black