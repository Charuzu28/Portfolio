import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />

      {/* Fallback */}
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App