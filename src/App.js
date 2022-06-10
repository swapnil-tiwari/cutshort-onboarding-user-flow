import logo from './logo.svg';
import './App.css';
import FormView from './components/FormView/FormView.js'
import FormView2 from './components/FormView/FormView2.js';
import FormView3 from './components/FormView/FormView3';
import MessageView from './components/MessageView/MessageView';
import HeaderView from './components/Header/HeaderView';
import ProgressBar from './components/ProgressBar/ProgressBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let msgsLarge={
    msg1:"Welcome! First things first",
    msg2:"Let's set up a home for all your work"
  };
  let msgsSmall={
    msg1:"You can always change them later.",
    msg2:"You can always create another workspace later."
  }
  let msgState=msgsLarge.msg1;
  console.log(msgState)
  let msgSmall=msgsSmall.msg1;
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderView /> 
        <ProgressBar/>
        <div className={`container styledContainer`}>
          <MessageView msgLarge={msgState} msgSmall={msgSmall}/>
          <Route path="formView1" element={<FormView3/>}/>
        </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
