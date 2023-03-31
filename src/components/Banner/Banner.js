import React from 'react'
import './Banner.css'
import banner_video from '../../videos/banners_video.mp4'
function Banner() {

  return (
    <div className="banner">
      <div className="bgclr"></div>
      <video  src={banner_video} autoPlay loop muted /> 
      <div className="banner_main">
        <div className="discover">
          <li><a href="#">Discover</a></li>
          <li><a href="#">Animation</a></li>
          <li><a href="#">Branding</a></li>
          <li><a href="#">Illustration</a></li>
          <li><a href="#">Mobile</a></li>
          <li><a href="#">Print</a></li>
          <li><a href="#">Product Design</a></li>
          <li><a href="#">Typography</a></li>
          <li><a href="#">Web Design</a></li>
        </div>
        <div className="search">
          <h1>Explore the world's leading design portfolios</h1>
          <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world's best design and creative professionals.</p>
          <input type="search" name="" id=""  placeholder=' Search...'/>
          <ul>
            <li><a href="#">Trending searches</a></li>
            <li><a href="#">landing page</a></li>
            <li><a href="#">ios</a></li>
            <li><a href="#">food</a></li>
            <li><a href="#">landingpage</a></li>
            <li><a href="#">uxdesign</a></li>
            <li><a href="#">app design</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner