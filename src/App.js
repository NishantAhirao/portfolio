import About from './components/About/About';
import Contacts from './components/Contact/Contacts';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/NavBar/NNavbar';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
    <Works></Works>
    <Contacts></Contacts>
    <Footer></Footer>
    </div>
  );
}

export default App;
