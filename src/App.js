import './App.css';
import NavBar1 from './components/NavBar1';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Cv from './components/Cv';
import Blog from './components/Blog';
import Dev from './components/Dev';
import DevProject from './components/DevProject';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <NavBar1 />
      <Main />
      <Services />
      <Dev />
      <DevProject />
      <About />
      <Contact />
      <Cv />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
