import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />

      {/* Fallback */}
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App