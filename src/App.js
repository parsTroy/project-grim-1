import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Privacy from './components/Pages/Privacy/Privacy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
