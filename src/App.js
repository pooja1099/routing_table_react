import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './navbar';
import About from './component/About';
import ContactUs from "./component/ContactUs";
import Data from "./component/Data";
import Main from './component/Main';
// import Main from './component/main';

function App() {
  return (
    <div className="routing">
      <Navbar />
    {/* <Router> */}
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/contactUs" element={ <ContactUs/> } />
        <Route path="/Data" element={ <Data/> } />
      </Routes>
  
    {/* </Router> */}

    {/* <Data/> */}
    </div>
  );
}

export default App;
