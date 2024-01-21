import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Excel from './pages/Excel';
import Excel from './pages/PowerBI';
import Tableau from './pages/Tableau';
import Overland from './pages/Overland';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='excel' element={<Excel />} />
          <Route path='powerbi' element={<PowerBI />} />
          <Route path='tableau' element={<Tableau />} />
          <Route path='overland' element={<Overland />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

