import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/Navbar.css';

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Menu from './components/Menu';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import Notification from './components/Notification';
import React_course from './components/React_course';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/notification" element={<Notification></Notification>}></Route>
        <Route path="/react_course" element={<React_course></React_course>}></Route>
        <Route path="/chatbot" element={<Chatbot></Chatbot>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
