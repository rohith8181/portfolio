import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About'
import vedio from './assets/Vedio.mp4'
import Intropage from './components/Intropage/Intropage'
import Skills from './components/Skills/Skills';
import AnimatedCursor from 'react-animated-cursor';
import Contact from './components/Contact/Contact';
import Project1 from './components/Projectcarousel/Project';

function App() {
  return (
    <div id='top' className='app'>
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
    </div>
  );
}

export default App;
