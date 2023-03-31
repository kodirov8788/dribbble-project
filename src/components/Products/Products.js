import React from 'react'
import './Products.css'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.png'
import img6 from '../../images/6.png'
import img7 from '../../images/7.gif'
import img8 from '../../images/8.jpg'
import img9 from '../../images/9.png'
import img10 from '../../images/10.jpg'
import img11 from '../../images/11.png'
import img12 from '../../images/12.png'
import img13 from '../../images/13.jpg'
import img14 from '../../images/14.png'
import img15 from '../../images/15.png'
import img16 from '../../images/16.png'
import img17 from '../../images/17.png'
import img18 from '../../images/18.png'
import img19 from '../../images/19.jpg'
import img20 from '../../images/20.png'
import img21 from '../../images/21.jpg'
import img22 from '../../images/22.png'
import img23 from '../../images/23.png'
import img24 from '../../images/24.jpg'
import img25 from '../../images/25.png'
import img26 from '../../images/26.png'
import img27 from '../../images/27.png'
import img28 from '../../images/28.png'
import img29 from '../../images/29.png'
import img30 from '../../images/30.jpg'
import img31 from '../../images/31.png'
import img32 from '../../images/32.jpg'
import img33 from '../../images/33.png'
import img34 from '../../images/34.jpg'
import img35 from '../../images/35.jpg'
import img36 from '../../images/36.gif'
import img37 from '../../images/37.png'
import img38 from '../../images/38.jpg'
import img39 from '../../images/39.png'
import img40 from '../../images/40.png'
import img41 from '../../images/41.png'
import img42 from '../../images/42.jpg'
import img43 from '../../images/43.png'
import img44 from '../../images/44.png'
import img45 from '../../images/45.png'
import img46 from '../../images/46.png'

import iimg1 from '../../images/01.png'
import iimg2 from '../../images/02.png'
import iimg3 from '../../images/03.png'
import iimg4 from '../../images/04.png'
import iimg5 from '../../images/05.jpg'
import iimg6 from '../../images/06.png'
import iimg7 from '../../images/07.png'
import iimg8 from '../../images/08.jpg'
import iimg9 from '../../images/09.png'
import iimg10 from '../../images/100.png'
import iimg11 from '../../images/110.jpg'
import iimg12 from '../../images/120.png'
import iimg13 from '../../images/130.jpg'
import iimg14 from '../../images/140.png'
import iimg15 from '../../images/150.jpg'
import iimg16 from '../../images/160.png'
import iimg17 from '../../images/170.png'
import iimg18 from '../../images/180.png'
import iimg19 from '../../images/190.jpg'
import iimg20 from '../../images/200.jpg'
import iimg21 from '../../images/210.jpeg'
import iimg22 from '../../images/220.png'
import iimg23 from '../../images/230.png'
import iimg24 from '../../images/240.png'
import iimg25 from '../../images/250.jpg'
import iimg26 from '../../images/260.png'
import iimg27 from '../../images/270.jpg'
import iimg28 from '../../images/280.jpg'
import iimg29 from '../../images/290.jpg'
import iimg30 from '../../images/300.png'
import iimg31 from '../../images/310.png'
import iimg32 from '../../images/320.png'
import iimg33 from '../../images/330.png'
import iimg34 from '../../images/340.jpg'
import iimg35 from '../../images/350.gif'
import iimg36 from '../../images/360.jpg'
import iimg37 from '../../images/370.jpg'
import iimg38 from '../../images/380.png'
import iimg39 from '../../images/390.png'
import iimg40 from '../../images/400.png'
import iimg41 from '../../images/410.jpg'
import iimg42 from '../../images/420.png'
import iimg43 from '../../images/430.jpeg'
import iimg44 from '../../images/440.png'
import iimg45 from '../../images/450.jpg'
import iimg46 from '../../images/460.png'

import{FcLike} from "react-icons/fc"
import{AiFillEye} from "react-icons/ai"


function Products() {
  return (
    <div className='big'>
      <div className="big_btn">
        <button>Popular </button>
        <button>Filters</button>
      </div>
      <div className="collection">
        <div className="box">
          <div className="product_image">
            <img src={img1} alt="" />
          </div>
          <div className="product_info">
            <div className="text">
              <img src={iimg1} alt="" />
              <span>Anano Martsvaladze | Logo ... </span>
              <button> PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>225</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img2} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg2} alt="" />
              <span>Mako Tsereteli</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>424</span>
            <AiFillEye />
            <span>19.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img3} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg3} alt="" />
              <span>Squarespace</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>125</span>
            <AiFillEye />
            <span>9.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img4} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg4} alt="" />
              <span>Fireart Studio</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>525</span>
            <AiFillEye />
            <span>59.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img5} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg5} alt="" />
              <span>UI8</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>234</span>
            <AiFillEye />
            <span>14.1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img6} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg6} alt="" />
              <span>Ramotion</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>240</span>
            <AiFillEye />
            <span>20</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img7} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg7} alt="" />
              <span>Balkan Brothers</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>698</span>
            <AiFillEye />
            <span>29.9</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img8} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg8} alt="" />
              <span>Jeroen van Eerden</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>999</span>
            <AiFillEye />
            <span>99.9</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img9} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg9} alt="" />
              <span>Halo Lab 🇺🇦</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>111</span>
            <AiFillEye />
            <span>89.9</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img10} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg10} alt="" />
              <span>Damian Orellana</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>105.2</span>
            <AiFillEye />
            <span>8.1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img11} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg11} alt="" />
              <span>Ronas IT | UI/UX Team</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>563</span>
            <AiFillEye />
            <span>35.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img12} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg12} alt="" />
              <span>Aleksandar Savic</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>219</span>
            <AiFillEye />
            <span>42</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img13} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg13} alt="" />
              <span>Awsmd</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>24</span>
            <AiFillEye />
            <span>4.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img14} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg14} alt="" />
              <span>Purrweb UI/UX Agency</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>825</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img15} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg15} alt="" />
              <span>Open Purpose®</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>225</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img16} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg16} alt="" />
              <span>Mik Skuza</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>345</span>
            <AiFillEye />
            <span>21.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img17} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg17} alt="" />
              <span>Arounda: UX/UI & WEB</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>315</span>
            <AiFillEye />
            <span>2.1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img18} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg18} alt="" />
              <span>One Week Wonders</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>88</span>
            <AiFillEye />
            <span>888</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img19} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg19} alt="" />
              <span>Alexandra Necula</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>1</span>
            <AiFillEye />
            <span>1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img20} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg20} alt="" />
              <span>Conceptzilla</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>145</span>
            <AiFillEye />
            <span>3.4</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img21} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg21} alt="" />
              <span>Jack Daly</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>22</span>
            <AiFillEye />
            <span>25</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img22} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg22} alt="" />
              <span>Nino Lekveishvili</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>225</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img23} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg23} alt="" />
              <span>Lucian Radu</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>505</span>
            <AiFillEye />
            <span>50.2</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img24} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg24} alt="" />
              <span>Alex Aperios</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>321</span>
            <AiFillEye />
            <span>2.5</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img25} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg25} alt="" />
              <span>Peter Tarka</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>815</span>
            <AiFillEye />
            <span>18.3</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img26} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg26} alt="" />
              <span>Victor Murea</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>54</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img27} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg27} alt="" />
              <span>Peter Tarka</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>372</span>
            <AiFillEye />
            <span>2.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img28} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg28} alt="" />
              <span>Victor Murea</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>25</span>
            <AiFillEye />
            <span>5.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img29} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg29} alt="" />
              <span>Andrey Prokopenko 🇺🇦</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>742</span>
            <AiFillEye />
            <span>1.4</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img30} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg30} alt="" />
              <span>MA Rakib Khan</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>116</span>
            <AiFillEye />
            <span>1.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img31} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg31} alt="" />
              <span>Elbu Studio</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>225</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img32} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg32} alt="" />
              <span>Alex Krugli</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>15</span>
            <AiFillEye />
            <span>255</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img33} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg33} alt="" />
              <span>Ledo</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>777</span>
            <AiFillEye />
            <span>77.7</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img34} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg34} alt="" />
              <span>unfold</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>555</span>
            <AiFillEye />
            <span>55.5</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img35} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg35} alt="" />
              <span>Ofspace UX/UI</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>1234</span>
            <AiFillEye />
            <span>5.1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img36} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg36} alt="" />
              <span>ILLO</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>444</span>
            <AiFillEye />
            <span>44.4</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img37} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg37} alt="" />
              <span>Outcrowd</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>333</span>
            <AiFillEye />
            <span>33.3</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img38} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg38} alt="" />
              <span>Tornike Uchava</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>222</span>
            <AiFillEye />
            <span>22.2</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img39} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg39} alt="" />
              <span>tubik.arts</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>111</span>
            <AiFillEye />
            <span>11.1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img40} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg40} alt="" />
              <span>Lucas Fields</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>909</span>
            <AiFillEye />
            <span>2.1</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img41} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg41} alt="" />
              <span>Irakli Meskhi</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>45</span>
            <AiFillEye />
            <span>2.7</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img42} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg42} alt="" />
              <span>Gert van Duinen</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>180</span>
            <AiFillEye />
            <span>1.2</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img43} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg43} alt="" />
              <span>Gleb Kuznetsov ✈</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>100</span>
            <AiFillEye />
            <span>100</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img44} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg44} alt="" />
              <span>Halal Lab</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>225</span>
            <AiFillEye />
            <span>25.6</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img45} alt="" />
          </div>
          <div className="product_info">
            <div className="">
              <img src={iimg45} alt="" />
              <span>Properly</span>
              <button>TEAM</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>332</span>
            <AiFillEye />
            <span>3.9</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="product_image">
            <img src={img46} alt="" />
          </div>
          <div className="product_info">
            <div className="product_btn">
              <img src={iimg46} alt="" />
              <span>Jacek Janiczak</span>
              <button>PRO</button>
            </div>
            <div className="numbers">
            <FcLike />
            <span>1100</span>
            <AiFillEye />
            <span>1.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products