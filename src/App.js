import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./scenes/Home";
import Menu from "./scenes/Menu";
import Categories from "./scenes/Categories";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Faq from "./scenes/Faq";
import TermsAndConditions from "./scenes/TermsAndConditions";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <> 
    <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/menu"   element={<Menu/>} />
          <Route path="/categories"  element={<Categories/>} />
          <Route path="/about"   element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/faq"  element={<Faq/>} />
          <Route path="/termsandconditions"  element={<TermsAndConditions/>} />
        </Routes>
        <Footer />
        </>
       
  );
}

export default App;