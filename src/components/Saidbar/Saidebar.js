import React from 'react'
import "./Saidebar.css"
import Img from '../../images/1.jpg'
import Img2 from '../../images/2.png'


function Saidebar() {
    return (
        <div className='Saidebar'>
            <div className="nav_bar">

                <div className="but_1">
                    <button>Full-time Job Board</button>
                    <ul>
                        <li><a href="#">Freelance Jobs</a></li>
                        <li><a className='a2' href="#">Designer Search</a></li>
                    </ul>
                </div>


                {/* but2 */}
                <div className="but_2">
                    <div className="navi">
                        <h1>The #1 Job Board for Graphic Design Jobs</h1>
                        <p>Dribbble is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.</p>
                        <button className='btn'>Post a job - Start at $ 249 /mo</button>
                        <button className='btn2'>Learn more</button>
                    </div>
                    <div className="navi2">
                        <img className='Img' src={Img} alt="" />
                        <img className='Img2' src={Img2} alt="" />
                    </div>


                    {/* but2 */}
                </div>
                <div className="h1dagi">
                    {/* navpast */}
                    <div className="nav_2past">
                        <h1>Recent new opportunities</h1>
                        <p>1 new opportunity posted today!</p>
                    </div>
                    {/* h1dagi */}


                    <div className="engkatta">
                        <div className="btnchoose">
                            <h1>hello</h1>
                        </div>
                        <div className="sing">
                            <h1 className='h_1i'>Filter</h1>
                            <input className='input' type="text" placeholder='Company,skill,tag...' />
                            <hr />
                            <h1 className='h_1ii'>Specialties</h1>

                            <div className="check">
                                <input className='inp' type="checkbox" />
                                <h1>Animation</h1>
                            </div>

                            <div className="check">
                                <input className='inp2' type="checkbox" />
                                <h1>Brand / Graphic Design</h1>
                            </div>

                            <div className="check">
                                <input className='inp3' type="checkbox" />
                                <h1>Illustration</h1>
                            </div>

                            <div className="check">
                                <input className='in4' type="checkbox" />
                                <h1>Leadership</h1>
                            </div>

                            <div className="check">
                                <input className='inp5' type="checkbox" />
                                <h1>Mobile Design</h1>
                            </div>

                            <div className="check">
                                <input className='inp6' type="checkbox" />
                                <h1>UI / Visual Design</h1>
                            </div>

                            <div className="check">
                                <input className='inp7' type="checkbox" />
                                <h1>Product Design</h1>
                            </div>

                            <div className="check">
                                <input className='inp8' type="checkbox" />
                                <h1>UX Design / Research</h1>
                            </div>

                            <div className="check">
                                <input className='inp9' type="checkbox" />
                                <h1>Web Design</h1>



                            </div>

                            <hr />

                            <div className="footer">
                                <h1>Location</h1>
                                <input className='fot' type="text" placeholder='Enter Location...' />
                                <div className="ch2">
                                    <input type="checkbox" />
                                    <h1>Open to remote</h1>
                                </div>
                                <hr />
                                <div className="ch2">
                                    <input type="checkbox" />
                                    <h1>Full-Time</h1>
                                </div>
                                <div className="ch2">
                                    <input type="checkbox" />
                                    <h1>Freelance/Contract</h1>
                                </div>
                                <button>Filter</button>

                            </div>
                        </div>

                    </div>






                </div>

                {/* navbar */}
            </div>


            {/* saidebar */}
        </div>
    )
}

export default Saidebar