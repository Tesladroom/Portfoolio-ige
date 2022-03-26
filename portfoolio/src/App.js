import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Hobid from './Pages/Hobid';
import Kursused from './Pages/Kursused';
import Avaleht from './Pages/Avaleht';
import Minutööd from './Pages/Minutööd';



function App() {
  return (
    <div>
          <Routes>
        <Route path='/' exact element={ <Avaleht/> } />
        <Route path='/Minutööd' element={ <Minutööd/> } />
        <Route path='/Kursused' exact element={ <Kursused/> } />
        <Route path='/Hobid' exact element={ <Hobid/> } />
           </Routes>
           

       

     </div>
  );
}

export default App;
