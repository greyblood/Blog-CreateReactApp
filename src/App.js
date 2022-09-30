import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import BlogDetail from './Pages/BlogDetail';



function App() {
  return (
    <div className="app">
      <div className='brand'>My Website</div>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/profile" className='nav-item'>Profile</Link>
        <Link to="/blog" className='nav-item'>Blog</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>  
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="blog/:id" element={<BlogDetail />}/>
        <Route path="contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
