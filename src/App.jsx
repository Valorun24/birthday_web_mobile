import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, BirthdayFireworks, Card, Cake, Present } from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fireworks" element={<BirthdayFireworks />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/present" element={<Present />} />
      </Routes>
    </Router>
  );
}

export default App;
