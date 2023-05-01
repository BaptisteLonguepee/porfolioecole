import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import PageProjet from './pages/PageProjet/PageProjet';
import Projects from './pages/Projets/Projets';
import VielleTechno from './pages/VeilleTechno/VielleTechno';
import BtsSio from './pages/BtsSio/BtsSio';
import PageProjetEntrepise from "./pages/PageProjetEntreprise/PageProjet";
import EpreuveE4 from "./pages/epreuveE4/epreuveE4";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/btssio' element={<BtsSio/>}/>
        <Route path='/projects' element={<Projects/>} />
          <Route path='/epreuveE4' element={<EpreuveE4/>}/>
        <Route path='/project/:id' element={<PageProjet/>} />
          <Route path='/projectEntreprise/:id' element={<PageProjetEntrepise/>} />
          <Route path='/veilletechno' element={<VielleTechno/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
