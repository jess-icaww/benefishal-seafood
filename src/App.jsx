import './App.css'
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Origin from "./routes/Origin";
import Services from "./routes/Services";
import Order from "./routes/Order";
import Footer from "./components/Footer";
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
