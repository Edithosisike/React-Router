
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Cloud from './components/Cloud';
import Users from './components/Users';
import React from './components/ErrorBoundary';
import Error from './components/Error';



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/users" element={<Users />}>
          <Route path="/:userid" element={<Users />} /></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}


export default App;