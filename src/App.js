import logo from './logo.svg';
import './App.css';
// import Topbar from './component/Topbar'
import Topbar from './Landingpage/component/Topbar';
import Navbar from './Landingpage/component/navbar';
import Home from './Landingpage/component/home';
import Footer from './Landingpage/component/Footer';
import Services from './Landingpage/component/Services';
// import Generatorrentalservices from './Landingpage/component/Generator rental services';
// import Generatorset from './Landingpage/component/Generator set';
import Otherproducts from './Landingpage/component/Other products';
import Gallery from './Landingpage/component/Gallery';
import FAQ from './Landingpage/component/FAQ';
import Aboutus from './Landingpage/component/Aboutus';
import Contactus from './Landingpage/component/Contactus';
import Career from './Landingpage/component/Career';
// import ScrollButton from './Landingpage/component/ScrollButton';

// import Testimonial from './Landingpage/component/Testimonial';

import { Route,Routes } from 'react-router-dom';
import { Carousel } from 'bootstrap';
import WhatsAppButton from './Landingpage/component/Whatsapp/Whatsapp';




function App() {
  return (
  <div>
    
    
    
    <Topbar/>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/topbar" element={<Topbar/>}/>
      <Route  path="/Services" element={<Services/>}/>
      {/* <Route  path="/Generator rental services" element={<Generatorrentalservices/>}/>
      <Route  path="/Generator set" element={<Generatorset/>}/> */}
      <Route  path="/Other products" element={<Otherproducts/>}/>
      <Route  path="/Gallery" element={<Gallery/>}/>
      <Route  path="/FAQ" element={<FAQ/>}/>
      <Route  path="/Aboutus" element={<Aboutus/>}/>
      <Route  path="/Contactus" element={<Contactus/>}/>
      <Route  path="/Career" element={<Career/>}/>
      {/* <Route  path="/ScrollButton" element={<ScrollButton/>}/> */}
      {/* <Route  path="/Testimonial" element={<Testimonial/>}/> */}
     
      
      </Routes>
      <WhatsAppButton/>
      <Footer/>
      
    
    
    
    </div> 
  );
}



export default App;

