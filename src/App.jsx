
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import HeroSection from './components/HeroSection'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'

function App() {

  return (
   <>

   <div>
<div className="max-w-[1320px] mx-auto ">
<Navbar />
<Banner />
<HeroSection />
<Products />
<Categories/>
<Footer />
</div>

   </div>
   </>
  )
}

export default App
