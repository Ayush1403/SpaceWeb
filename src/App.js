import logo from './logo.svg';
import {Route , Routes} from 'react-router-dom'
import './App.css';
import { Page , Home , Planet } from './Pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Page />} />
      <Route path='/home' element={<Home />} />
      <Route path='/planet' element={<Planet />} />
    </Routes>
  );
}

export default App;
