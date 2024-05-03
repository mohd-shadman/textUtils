import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils | Dark-Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils | Light-Mode';
    }
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
      </div>
    </>
  );
}

export default App;




















































// import './App.css';
// import Alert from './components/Alert';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setalert] = useState(null);

//   const showAlert = (message, type) => {
//     setalert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setalert(null);
//     }, 2000)
//   }

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'black';
//       showAlert("Dark mode has been enable", "success");
//       document.title = 'Textutils | Dark-Mode';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("light mode has been enable", "success");
//       document.title = 'Textutils | light-Mode';


//     }
//   };

//   return (
//     <>
//       <Router>
//       <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <TextForm showAlert={showAlert} heading="Enter the text" />
//           </Route>
//         </Switch>
//         {/* <About></About> */}
//       </div>
//       </Router>

//     </>
//   );
// }

// export default App;








































// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, {useState} from 'react'

// // import About from './components/About';
// function App() {
//   const [mode, setMode] = useState('dark');

//   const toggleMode=()=>{
//     if(mode==='light'){
//     setMode('dark')
//     document.body.style.backgroundColor='dark'
//     }
//     else{
//       setMode('light')
//     document.body.style.backgroundColor='light'

//     }
//   }
//   return (
//     <>
//       {/* <Navbar title="Nice collection" aboutText="about us"></Navbar> */}
//       <Navbar title="Nice collection" mode={mode} toggleMode={toggleMode}></Navbar>
//       {/* <Navbar/> */}
//       <div className="container my-3">
//         <TextForm heading="Enter the text" />
//         {/* <About></About> */}
//       </div>
//     </>
//   );
// }

// export default App;


