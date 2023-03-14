import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Service from './Service/Service';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<Home/>} />
   <Route exact path="/service" element={<Service/>} />
   <Route exact path="/about" element={<About/>} />
   <Route exact path="/contact" element={<Contact/>} />
   </Routes>
   <Footer/>
   
   </>
  );
}

export default App;
