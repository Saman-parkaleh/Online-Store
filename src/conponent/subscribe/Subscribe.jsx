
import React,{useEffect} from 'react';
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Subscribe.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Subscribe = () => {

  useEffect(()=>{
    AOS.init({ duration: 400,
    delay:.1}
         );
    })

  return (
   <section id="section" data-aos="fade-up"
   data-aos-anchor-placement="center-bottom">
    <div className='hed'> 
      <h1>حالا مشترک شوید</h1>
      <form>
         <button>مشترک شدن</button>
         <input type="email" />
         
         </form>
    </div>
    <div className='icon'>
    <div className="social-icon">
            <FaInstagram />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
    </div>


   </section>
  )
}

export default Subscribe
