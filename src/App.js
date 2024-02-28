import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import DataAnalysis from './pages/DataAnalysis';
import Overland from './pages/Overland';
import CanvaProject from './pages/CanvaProject';
import UberDiscounts from './pages/UberDiscounts';
import Slackr from './pages/Slackr';
import Airbrb from './pages/Airbrb';

function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='data-analysis' element={<DataAnalysis />} />
          <Route path='canva-project' element={<CanvaProject />} />
          <Route path='uber-discounts' element={<UberDiscounts />} />
          <Route path='slackr' element={<Slackr />} />
          <Route path='airbrb' element={<Airbrb />} />
          <Route path='overland' element={<Overland />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

