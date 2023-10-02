import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Pocky from './Pocky';
import Chips from './Chips';
import BuffaloWings from './BuffaloWings';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path="/pocky" element={<Pocky />}></Route>
          <Route path="/buffalo-wings" element={<BuffaloWings />}></Route>
          <Route path="/chips" element={<Chips />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
