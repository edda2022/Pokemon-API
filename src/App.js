import './App.css';
import {Routes, Route, Link, useNavigate, NavLink} from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonPage from './components/PokemonPage';
import Homepage from './components/Homepage';
import Berries from './components/Berries';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  function capitalizeFirstLetter(i) {
    return i?.charAt(0).toUpperCase() + i?.slice(1);
  }
  
  return (
    <>
    <Header />
    <div className="main">
      <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/pokemon" element={<PokemonList capitalizeFirstLetter={capitalizeFirstLetter}/>}></Route>
          <Route path="/pokemon/:name" element={<PokemonPage capitalizeFirstLetter={capitalizeFirstLetter}/>}></Route>
          <Route path="/berries" element={<Berries />}></Route>
      </Routes>
   </div>
   <Footer/>
  </>
  );
  
}

export default App;
