import "./App.css";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail.js"
import { useState } from "react";

function App() {
    const [sendMessageisOpen,setsendMessageisOpen ]= useState(false);
  return (
    <Router>
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar isOpen={setsendMessageisOpen}/>
        <Switch>
            <Route path="/mail">
                <Mail />
            </Route>
            <Route path="/">
                <EmailList />
            </Route>
        </Switch>
      </div>
      {sendMessageisOpen && <SendMail isOpen={setsendMessageisOpen} />}
    </div>
    </Router>
   );
 }

export default App;
