import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seller from "./pages/Seller";
import Weaver from "./pages/Weaver";
import Retailer from "./pages/Retailer";
import Consumer from "./pages/Consumer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Seller />} />
        <Route path="/weaver" element={<Weaver />} />
        <Route path="/retailer" element={<Retailer />} />
        <Route path="/consumer" element={<Consumer />} />
      </Routes>
    </Router>
  );
}

export default App;