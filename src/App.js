import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  // Default styling if any
import WaterFootprint from './WaterFootprint'; // Import the WaterFootprint component
import FootprintInfo from './FootprintInfo'; // Import the FootprintInfo component
import SearchPage from './Searchpage';

function App() {
  return (
    // <div className="App">
    //   <WaterFootprint />
    // </div>
    <Router>
    <Routes>
        <Route path="/" element={<WaterFootprint />} />
        <Route path="/FootprintInfo" element={<FootprintInfo />} />
        <Route path="/Searchpage" element={<SearchPage />} />
    </Routes>
</Router>
  );
}

export default App;
