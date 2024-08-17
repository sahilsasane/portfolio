import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className="bg-[url('/background.png')] h-screen overflow-hidden" >

      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
