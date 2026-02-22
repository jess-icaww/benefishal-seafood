import './App.css'
import Navbar from "./components/Navbar.js";
import Home from "./routes/Home.js";
import Origin from "./routes/Origin.js";
import Services from "./routes/Services.js";
import Order from "./routes/Order.js";
import Footer from "./components/Footer.js";
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/origin" element={<Origin />} />
      <Route path="/services" element={<Services />} />
      <Route path="/order" element={<Order />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
