
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
// import Services from './components/Services';
import English from './components/English';
import Cv from './components/Cv';
import Blog from './components/Blog';
import Dev from './components/Dev';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <NavBar />
      <Main />
      {/* <Services /> */}
      <English />
      {/* <Dev /> */}
      <About />
      <Contact />
      <Cv />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
