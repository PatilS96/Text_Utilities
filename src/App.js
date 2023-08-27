
import './App.css';
import About from './componants/About';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert =(message,type)=> {
    setalert({
      message:message,
      type:type
    })
    setTimeout (()=>{
      setalert(null);
    },1500);
  }

  const togglemode =()=> {
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showalert('Dark Mode Enabled', 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert('Light Mode Enabled', 'success');
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} about="About Us" />
      <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>}  />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
