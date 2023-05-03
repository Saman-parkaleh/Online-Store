import React,{useEffect} from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import './Download.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Download = () => {
  useEffect(()=>{
    AOS.init({ duration: 400,
    delay:1}
         );
    })
  return (
    <section id="download"data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"> 
      <div>
        <div className="header">
          <h1>دانلود اپلیکشن ما </h1>
          <p>برنامه های ما برای دانلود در همه فروشگاه ها موجود است.</p>
        </div>
        <div className="download-apps">
          <div className="download-app">
            <FaApple />
            <p>آیفون</p>
          </div>
          <div className="download-app">
            <FaWindows />
            <p>ویندوز</p>
          </div>
          <div className="download-app">
            <GrAndroid />
            <p>اندروید</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
