
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'

function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
