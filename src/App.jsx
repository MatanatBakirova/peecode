import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Whatwedo from './pages/Whatwedo'
import Career from './pages/Career'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <div className="container">
      <Router>
      <Navbar/>
        <Routes >
          <Route path='/' element={<Whatwedo/>}/>
          <Route path='/kariyera' element={<Career/>}/>
          <Route path='/bizimle-elaqe' element={<Contact/>}/>
          <Route path='/meqaleler' element={<Blog/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
