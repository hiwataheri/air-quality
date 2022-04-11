
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './components/screens/hom/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/screens/login/Login';
import Registration from './components/screens/registration/Registration';
import Community from './components/screens/Community/Community';
import About from './components/screens/about/About';


function App() {
  return (
   <BrowserRouter>
     <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </main>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
