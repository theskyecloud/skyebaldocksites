import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Services from "./pages/Services";
import WebsiteTypes from "./pages/WebsiteTypes";
import Pricing from "./pages/Pricing";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/skyebaldocksites/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<Services />} />
          <Route path="websitetypes" element={<WebsiteTypes />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contactme" element={<ContactMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contactme" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
