import React, { useEffect } from "react";
import phoneHeader from "../../assets/phone-header-bg.png";
import "./Header.css";
import { BsMouse } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

useEffect(()=>{
  AOS.init({ duration: 400,
  delay:.5}
   
  );

})


  return (
    <div className="contentheader" >
      <div className="header-right"data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
        <samp className="samp1">پیشروی در سطح جهانی </samp>
        <samp className="samp2"> امنیت در همه پلتفرم ها</samp>
        <samp className="samp3">سیستم پیام رسانی</samp>
        <div className="line"></div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>

        <div className="btn">
          <a className="btn-start" href="#">بیاین شروع کنیم</a>
          <a className="btn-ystart" href="#">چجوری کار میکنیم</a>
        </div>
      </div>
      <div className="header-left" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <img src={phoneHeader} alt="phone" />
      </div>
      <div className="anime"> 
        <a href="#features" >
          <BsMouse color={"#ff0000"} size={28} className="mouse" />
          </a>
          </div>
    </div>
  );
};

export default Header;
