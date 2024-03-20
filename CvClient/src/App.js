import Navbar from "./components/navbars/navbar";
import Footer from "./components/footers/footer"
import ContactPage from "./components/contact-page/contactpage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./components/main-page/mainpage";

function App() {
  return ( 
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

      
<Footer/>
      

      
    </div>
      
      </Router>
  );
}

export default App;
