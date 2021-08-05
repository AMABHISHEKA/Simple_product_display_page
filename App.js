import React from "react";
import Card from './Components/Card';
import Imageslider from "./Components/Imageslider";
import { SliderData } from "./Components/SliderData";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import ".//Components/index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Imageslider slides={SliderData}/>
      <h1 className="organic-heading">Organic Products</h1>
      <Card productName="Specs" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*YFDeSO9ljiYaszZk1FXm8Q.jpeg" cardText="Specs,Mobile,Tab" cardPrice="Rs.4500" />
      <Card productName="Laptop" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" cardText="Silver color Laptop" cardPrice="Rs.45000" />
      <Card productName="Specs" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*YFDeSO9ljiYaszZk1FXm8Q.jpeg" cardText="Specs,Mobile,Tab" cardPrice="Rs.4500" />
      <Card productName="Laptop" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" cardText="Silver color Laptop" cardPrice="Rs.45000" />
      <Card productName="Specs" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*YFDeSO9ljiYaszZk1FXm8Q.jpeg" cardText="Specs,Mobile,Tab" cardPrice="Rs.4500" />
      <Card productName="Laptop" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" cardText="Silver color Laptop" cardPrice="Rs.45000" />
      <Card productName="Specs" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*YFDeSO9ljiYaszZk1FXm8Q.jpeg" cardText="Specs,Mobile,Tab" cardPrice="Rs.4500" />
      <Card productName="Laptop" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" cardText="Silver color Laptop" cardPrice="Rs.45000" />
      <Card productName="Specs" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*YFDeSO9ljiYaszZk1FXm8Q.jpeg" cardText="Specs,Mobile,Tab" cardPrice="Rs.4500" />
      <Card productName="Laptop" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" cardText="Silver color Laptop" cardPrice="Rs.45000" />
      <Card productName="Specs" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*YFDeSO9ljiYaszZk1FXm8Q.jpeg" cardText="Specs,Mobile,Tab" cardPrice="Rs.4500" />
      <Card productName="Laptop" imgSrc="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" cardText="Silver color Laptop" cardPrice="Rs.45000" />
      <Footer />
     </div>
  );
}

export default App;
