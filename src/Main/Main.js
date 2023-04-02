import React from 'react'
import './Main.css'
// import a1 from '../../videos/1.mp4'
// import a2 from '../../videos/2.mp4'
// import a3 from '../../videos/3.mp4'
import img from '../../images/1.png'
function Main() {
  return (
    <div>
        <div className="h1">
        <h1>Learn design online with industry leaders</h1>
        </div>
        <div className="p">
            <p>Ready to invest in your design career? Browse our catalog of highly interactive, online design courses taught by the best in the industry.</p>
        </div>
        <div className="btn">
          <button>Browse course</button>
        </div>
        <div className="image">
         <img src={img} alt="" />
        </div>
        </div>
  )
}

export default Main