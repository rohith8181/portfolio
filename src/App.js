import './App.css';
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import About from './components/About/About'
import vedio from './assets/Vedio.mp4'
import Intropage from './components/Intropage/Intropage'
import Skills from './components/Skills/Skills';
import AnimatedCursor from 'react-animated-cursor';
import Contact from './components/Contact/Contact';
import Project1 from './components/Projectcarousel/Project';
import Paybalance from './components/Bot/Paybalance';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div id='top' className='app'>
          <AnimatedCursor />
          <video src={vedio} autoPlay muted loop className='MainVedio' />
          <div className='VedioOverlay'></div>
          <div className='VedioPage'>
            <Header />
            <About />
          </div>
          <Intropage />
          <Skills />
          <Project1 />
          <Contact />
        </div>} />
        <Route path='/bot/telegram/1489001928' element={<Paybalance />} />
      </Routes>
    </Router>

  );
}

export default App;
