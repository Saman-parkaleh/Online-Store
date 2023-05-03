import React,{useEffect} from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import { FeaturesList } from "./Data.js";
import { BsHexagon } from "react-icons/bs";
import "./Features.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Features = () => {


useEffect(()=>{
  AOS.init({ duration: 400,
  delay:.1,}
       );
  })

  return (
    <div className="boxfeatures" id="features">
      <div className="headerfeatures" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h1>
          
          <BsFillBookmarkStarFill color="orangered" size={30} />
        </h1>
        <h2 name="#features"> ویژگی های اصلی</h2>
        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</small>
      </div>
      <div className="contentbootum">
        <div className="img-left"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={phoneFeatures} alt="" />
        </div>
        <div className="content-right" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className="title">
          {FeaturesList.map((feature) => (
            <div className="feature" key={feature.id}>
              <div className="feature-icon">
                <BsHexagon color="#fc5412" size={40} />
                <div className="icon">{feature.icon}</div>
              </div>
              <div>
                <h1>{feature.heading}</h1>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
