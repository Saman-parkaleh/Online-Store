import React, { useState ,useEffect} from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import "./Navbar.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

 useEffect(()=>{
    AOS.init({ duration: 400,
    delay:.1}
         );
    })

  const [showmeno, setShowmeno] = useState(false);

  

  const togglemenu = () => {
    setShowmeno(!showmeno);
  };

  return (
    <div className="content " data-aos="fade-up"
    data-aos-duration="3000">
      <div className="meno">
        <ul className="links" id={showmeno ? "meno-mobile" : "mobile-hide"}>
          <li className="ferstli">آموزش بیشتر </li>
          <li>خانه </li>
          <li>امکانات</li>
          <li>دانلود </li>
          <li>مشترک شوید</li>
        </ul>
      </div>
      <div className="logo">
        <SiAnaconda color="#fff" size={30} />
        <p>
          social
          <samp className="text-red-500">X </samp>
        </p>
      </div>
      <div className="menoicons" onClick={togglemenu}>
        {showmeno ? (
          <RiCloseLine
            className=""
            size={35}
            color={"#fff"}
            cursor={"pointer"}
          />
        ) : (
          <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
