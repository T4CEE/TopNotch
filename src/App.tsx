import Navbar from './components/Navbar'
import './App.css'
// import BorderlessPayment from './components/BorderlessPayment'
// import FlexOne from './components/FlexOne'
// import FlexTwo from './components/FlexTwo'
// import FlexThree from './components/FlexThree'
// import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom"
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import Faqs from './components/Faq'
import ContactUs from './components/ContactUs'
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer'
import Verified from './components/verified'
import SecondPage from './components/SecondPage'
import ThirdSelection from './components/ThirdPage'
import FourthSelection from './FourthSelection'


function App() {

  return (
    <div className='overflow-hidden'>
       <ScrollToTop>
      <Navbar />
      <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/about" element={ <AboutPage />} />
      <Route path="/faqs" element={ <Faqs />} />
      <Route path="/contact-us" element={ <ContactUs />} />
        <Route path='/verify' element={<Verified />} />
        <Route path='/secondpage' element={<SecondPage />} />
        <Route path='/thirdselection' element={<ThirdSelection />} />
        <Route path='/fourthselection' element={<FourthSelection />} />
      </Routes>
      <Footer />
       </ScrollToTop>
    </div>
    
  )
}

export default App;