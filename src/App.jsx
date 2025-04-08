import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import BidSections from './components/BidSections/BidSections'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer/Footer';

function App() {

  const notify = () => toast("Wow so easy!");


  return (
    <div className='bg-gray-200'>
      <Navbar />
      <ToastContainer
          position="top-right"
          autoClose={5000}  // Auto close after 5 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={true}  // Toast closes if hover stops
      />
      <Banner />
      <BidSections notify={notify}/>
      <Footer />
    </div>
  )
}

export default App
