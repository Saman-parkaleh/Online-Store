import React,{useEffect} from 'react'
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from '../faq/data';
import '../faq/Faq.css';
import Question from './Quastion';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Faq = () => {
  useEffect(()=>{
    AOS.init({ duration: 400,
    delay:.1}
         );
    })
  return (
   <section id='faq' data-aos="fade-up"
   data-aos-anchor-placement="top-center">
    <div>
     <div className='boxfaq'>
     <MdOutlineLibraryBooks color="orangered" size={30} />
      <h1> سولات متداول</h1>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
     </div>
<div className='questions'>
  {
questions && questions.map((quastion)=>
<Question
key={quastion.id}
title={quastion.title}
answer={quastion.answer}
/>

)

  }
</div>


    </div>
    </section>
  )
}

export default Faq