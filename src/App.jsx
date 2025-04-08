import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import BidSection from './components/BidSection/BidSection'

function App() {

  return (
    <div className='bg-gray-200'>
      <Navbar />
      <Banner />
      <BidSection />
    </div>
  )
}

export default App
