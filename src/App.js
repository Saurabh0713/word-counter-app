
import { useState } from 'react';
import React  from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About/About';
import Header from './Components/Header/Header';
import Textarea from './Components/Textarea/Textarea';
// import {
//   BrowserRouter as Router,Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [setMode,changeMode]=useState('light')
  const [btnMode,changeBtnMode]=useState('dark')
  const [modeName,changemodeName]=useState('Enable dark mode')
  const [alert,setAlert]=useState(null)
  const [textareaBgColor,setTextareaBgColor] = useState('light')
  const showAlert= (message,type)=>{
    setAlert(
      {msg:message,
        type:type}
        )
        setTimeout(() => {
          setAlert(null)
        }, 1000);
      }

  // document.body.style.backgroundColor ="#333333"
  function handleMode(){
    if(setMode==='dark'){
      changeMode('light')
      changeBtnMode('dark')
      changemodeName('Enable dark mode')
      document.body.style.backgroundColor ="white"
      document.title = "TextUtils"
      // showAlert("lightmode enabled","success")
      setTextareaBgColor('light')
    }else{
      changeMode('dark')
      changeBtnMode('light')
      changemodeName('Disable dark mode')
      document.body.style.backgroundColor ="#333333"
      document.title = "TextUtils - Dark"
      // showAlert("darkmode enabled","success")
      setTextareaBgColor('dark')
    }
  }
  
  return (
    <div className='app'>
    {/* <Router> */}
    <Header mode={setMode} handleMode={handleMode} btnmode={btnMode} enablemode={modeName} />
    <Alert alertMsg={alert}/>
    <div className='body'>
    <Textarea showAlert={showAlert} bgMode={setMode} textareaBgColor={textareaBgColor} txtMode={btnMode}/>
    {/* <Routes>
          <Route exact path="/" element={<Textarea showAlert={showAlert} bgMode={setMode} textareaBgColor={textareaBgColor} txtMode={btnMode}/>}/>
          <Route exact path="/about" element={<About />}/>
    </Routes> */}
    </div>
    {/* </Router> */}
    </div>
  );
}

export default App;
