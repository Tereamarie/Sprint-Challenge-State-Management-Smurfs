import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfsList />
        <SmurfForm />
        <Footer />
      </div>
    );
  }
}

export default App;
