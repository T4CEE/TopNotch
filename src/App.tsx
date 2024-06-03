import Navbar from './components/Navbar'
import './App.css'
import BorderlessPayment from './components/BorderlessPayment'
import FlexOne from './components/FlexOne'
import FlexTwo from './components/FlexTwo'
import FlexThree from './components/FlexThree'
import Footer from './components/Footer'

function App() {

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <BorderlessPayment />
      <FlexOne />
      <FlexTwo />
      <FlexThree />
      <Footer />
    </div>
    
  )
}

export default App;