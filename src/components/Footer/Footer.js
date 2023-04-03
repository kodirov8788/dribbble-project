import React from 'react'
import './Footer.css'
import { CiBasketball } from "react-icons/ci"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"

function Footer() {
    return (
    
        <div className='footer'>
            <div className="link">
                <h1 className='bow1'>Dribbble</h1>
                <p>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</p>
                <div className="icons">
                    <li>
                        <a href="#">
                            <CiBasketball />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiFillFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsPinterest />
                        </a>
                    </li>
                </div>
            </div>
            <div className="link">
                <li>For designers</li>
                <li><a href="#">Go Pro!</a></li>
                <li><a href="#">Explore design work</a></li>
                <li><a href="#">Design blog</a></li>
                <li><a href="#">Overtime podcast</a></li>
                <li><a href="#">Playoffs</a></li>
                <li><a href="#">Weekly Warm-Up</a></li>
                <li><a href="#">Refer a Friend</a></li>
                <li><a href="#">Code of conduct</a></li>
            </div>
            <div className="link">
                <li>Hire designers</li>
                <li><a href="#">Post a job opening</a></li>
                <li><a href="#">Post a freelance project</a></li>
                <li><a href="#">Search for designers</a></li>
                <li>Brands</li>
                <li><a href="#">Advertise with us</a></li>

            </div>
            <div className="link">
                <li>Company</li>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Media kit</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Cookie policy</a></li>
            </div>
            <div className="link">
                <li>Directories</li>
                <li><a href="#">Design jobs</a></li>
                <li><a href="#">Designers for hire</a></li>
                <li><a href="#">Freelance designers for hire</a></li>
                <li><a href="#">Tags</a></li>
                <li><a href="#">Places</a></li>
                <li>Design assets</li>
                <li><a href="#">Dribbble Marketplace</a></li>
                <li><a href="#">Creative Market</a></li>
                <li><a href="#">Fontspring</a></li>
                <li><a href="#">Font Squirrel</a></li>
            </div>
            <div className="link">
                <li>Design Resources</li>
                <li><a href="#">Freelancing</a></li>
                <li><a href="#">Design Hiring</a></li>
                <li><a href="#">Design Portfolio</a></li>
                <li><a href="#">Design Education</a></li>
                <li><a href="#">Creative Process</a></li>
                <li><a href="#">Design Industry Trends</a></li>
                <div className="hr">

            
                </div>
                
            </div>
            
        </div>
            
            
    )
}

export default Footer