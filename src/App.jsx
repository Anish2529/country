import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './compoments/Nav';
import Display from './compoments/Display';
import CountryDetails from './compoments/CountryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Nav/><Display/></>}/>
        <Route path='/country/:id' Component={CountryDetails}/>
      </Routes>
    </Router>
  );
}

export default App;
