import React from 'react'
import "./Navbar.css"
import { AiOutlineAppstore } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { FiArrowRight } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { MdContentCopy } from "react-icons/md"
import { AiOutlineProfile } from "react-icons/ai"
import { GoFile } from "react-icons/go"



function Navbar() {
    return (
        <div>

            <div className="navbar">
                    
                <h1 className="nav_logo">Iribbble</h1>
                <ul className="nav_ul">
                    <li className='first'>
                        <a href="#">Inspiration</a>
                        
            
                    </li>

                    <li><a href="#">Find Work</a></li>
                    <li><a href="#">Learn Design</a></li>
                    <li><a href="#">Go Pro</a></li>
                    <li>
                        <a href="#">Hiere Designers</a>
                    </li>
                </ul>
                <a href="#"> <BiSearchAlt2 className='search' /></a>
                <div className="sing">
                    <span className='sing_in'><a href="#">Sing in</a></span>
                    <span className='sing_up'><a href="#">Sing up</a></span>
                </div>
            </div>




            <div className="text_iconc_1">
                <li className='text_icon_1' >
                    <a href="#">
                        <AiOutlineAppstore className='icon_1' />
                        <h3>Expolore Design Work</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 2 */}
                <li className='text_icon_2' >
                    <a href="#">
                        <FiHeart className='icon_1' />
                        <h3>New Noteworthy</h3>
                        <p>Up-and-coming designers</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 3 */}
                <li className='text_icon_3' >
                    <a href="#">
                        <MdContentCopy className='icon_1' />
                        <h3> Playoffs</h3>
                        <p>Work designers are riffing on</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 4 */}
                <li className='text_icon_4' >
                    <a href="#">
                        <AiOutlineProfile className='icon_1' />
                        <h3>Blog</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 5 */}
                <li className='text_icon_5' >
                    <a href="#">
                        <GoFile className='icon_1' />
                        <h3> Weekly Warm-up</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                <div className="text_1">
                    <ul className='hover_ul'>
                        <p>Browse Categories</p>
                        <li><a href="#">Animation</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Print</a></li>
                        <li><a href="#">Product Design</a></li>
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Web Design</a></li>
                    </ul>
                </div>


            </div>
            {/*div 2 */}
            <div className="text_iconc_2">
                <li className='text_icon_1' >
                    <a href="#">
                        <AiOutlineAppstore className='icon_1' />
                        <h3>Expolore Design Work</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 2 */}
                <li className='text_icon_2' >
                    <a href="#">
                        <FiHeart className='icon_1' />
                        <h3>New Noteworthy</h3>
                        <p>Up-and-coming designers</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 3 */}
                <li className='text_icon_3' >
                    <a href="#">
                        <MdContentCopy className='icon_1' />
                        <h3> Playoffs</h3>
                        <p>Work designers are riffing on</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                <div className='bottom'></div>
                {/* 4 */}
                <li className='text_icon_4' >
                    <a href="#">
                        <AiOutlineProfile className='icon_1' />
                        <h3>Blog</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>

            </div>

            {/* div 3 */}

            <div className="text_iconc_3">
                <li className='text_icon_1' >
                    <a href="#">
                        <AiOutlineAppstore className='icon_1' />
                        <h3>Expolore Design Work</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 2 */}
                <li className='text_icon_2' >
                    <a href="#">
                        <FiHeart className='icon_1' />
                        <h3>New Noteworthy</h3>
                        <p>Up-and-coming designers</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 3 */}
                <li className='text_icon_3' >
                    <a href="#">
                        <MdContentCopy className='icon_1' />
                        <h3> Playoffs</h3>
                        <p>Work designers are riffing on</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 4 */}
                <li className='text_icon_4' >
                    <a href="#">
                        <AiOutlineProfile className='icon_1' />
                        <h3>Blog</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
                {/* 5 */}
                <li className='text_icon_5' >
                    <a href="#">
                        <GoFile className='icon_1' />
                        <h3>Blog</h3>
                        <p>Trending designs to you</p>
                        <FiArrowRight className='icon_2' />
                    </a>
                </li>
            </div>

        </div>
    )
}

export default Navbar