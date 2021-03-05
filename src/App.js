import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards'
import Carousel from "./components/Carousel/CarouselComp";
import Column from "./components/Columns/Column";
import Footer from "./components/Footer/Footer";
import Login from "./components/Jumbotron/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Column />
      <Cards />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
