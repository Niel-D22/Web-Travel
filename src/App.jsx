import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './assets/pages/Layout'
import About from './assets/pages/About'
import Home from './assets/pages/Home'
import Blog from './assets/pages/Blogs'
import BlogDetail from './assets/pages/BlogDetail'
import PlaceRoute from './assets/pages/PlaceRoute'
import NoPage from './assets/pages/NoPage'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true,     // hanya animasi sekali saat scroll
    });
  }, []);
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout />}>
     <Route  index element={<Home />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/blog' element={<Blog />}/>
     <Route path='/blogs/:id' element={<BlogDetail />}/>
     <Route path='/places' element={<PlaceRoute />}/>
     <Route path='*' element={<NoPage />}/>
     </Route>
     </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
