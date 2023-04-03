import React from 'react'
import './Product.css'
import uch from '../../images/3.png'
function Product() {
  return (
    <div className='Product'>
        <div className="h">
            <h2>Not sure if you’re ready?</h2>
        </div>
        <div className="p2">
            <p>Join our free info session and meet the team to get an introduction to the field of Product Design and learn whether this course is for you.</p>
        </div>
        <div className="image3">
            <img src={uch} alt="" />
        </div>
        </div>
  )
}

export default Product