import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import './styles/style.css';

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
