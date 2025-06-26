
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import ListarCategoria from './components/categorias/listarcategoria/ListarCategoria'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategorias/:id" element={<FormCategoria />} />
            <Route path="/deletarcategorias/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
