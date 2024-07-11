import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Details from './Component/Details';
import Viewall from './Component/Viewall';
import Search from './Component/Search';
import Delete from './Component/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/view" element={<Viewall />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/del" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
