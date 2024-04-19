import './App.css'
import Body from './components/Body'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Footer from "./components/Footer";
import Kpi from './components/Kpi'

function App() {

  return (
    <>
      <Navbar />
      <Body />
      {/* <Reviews /> */}
      <Pricing />
      <Kpi />
      <Contact />
      <Footer />
    </>
  )
}

export default App
