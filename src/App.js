import { useState } from 'react';
import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import About from './componet/About';
import NavBar from './componet/NavBar';
import TextInput from './componet/TextForm'
import Alert from './componet/Alert'
function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, typeAlert) => {
    setAlert({
      msg: message,
      typ: typeAlert
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toogleModefunc = () => {

    if (darkMode === 'light') {
      setDarkMode("dark");
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode sussessfully enable", "success")
      document.title = 'TextUtills - Dark mode';
    }
    else {
      setDarkMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode sussessfully Disable", "success")
      document.title = 'TextUtills - Light mode';

    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <NavBar title="TextUtils" about="About textUtils" mode={darkMode} toogleMode={toogleModefunc} />
        <Alert alert={alert} />
        {/* <NavBar title = "TextUtils"   /> */}
        {/* <NavBar about = "About textUtils"  /> */}
        {/* <NavBar /> */}
        <div className='container my-4'>
          {/* <Routes> */}
          <TextInput alert={showAlert} heading="Enter the text to analyze" mode={darkMode} />
            {/* <Route exat path='/' element={<TextInput alert={showAlert} heading="Enter the text to analyze" mode={darkMode} />} /> */}
            {/* <Route exat path='about' element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
