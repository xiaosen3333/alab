import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './Home/Home';
import CompanyPage from './Company/Company';
import MediaPage from './Media/Media';
import ProductPage from './Product/Product';
// import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div style={{ background: "#0F0F0F",
     }}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    </div>
  );
}

export default App;
