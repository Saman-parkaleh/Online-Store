
import './App.css';
import Navbar from "./conponent/navbar/Navbar"
import Header from './conponent/header/Header';
import Features from './conponent/features/Features';
import Download from './conponent/downdoad/Download';
import Subscribe from './conponent/subscribe/Subscribe';
import Faq from './conponent/faq/Faq';
import Footer from './conponent/footer/Footer';

function App() {
  return (
<div className='box'>
  <header>
     <Navbar/>
    <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <Faq/>
      <Footer/>
</div>

  );
}

export default App;
