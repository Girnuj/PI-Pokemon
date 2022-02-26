import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detalles from './Components/Cards/Detalles';
import Home from './Components/Home';
import PrimerPage from './Components/PrimerPage';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   
   <Route 
      path="/"
      element={<PrimerPage/>}
    />

    <Route
    path='/home'
    element={<Home />}
    />

    <Route 
          path="/pokemons/:id"
          element={<Detalles />}
         />
          
   </Routes>
   </BrowserRouter>
  );
}

export default App;
