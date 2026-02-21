import { Outlet } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <Navbar />
        
        <Outlet /> 
        <Footer />
         <Toaster />
      </div>
    </>
  )
}

export default App;