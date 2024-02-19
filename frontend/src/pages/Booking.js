import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieDesc from "../components/MovieDesc";
import Theater from "../components/Theater";
import Pop from "../components/pop";
// import Prac from "../components/Prac";



export default class Booking extends React.Component {
    render() {
      return (
        <>
        
        <Header />
      <MovieDesc />  
     <Theater /> 
      <Pop /> 
      
        <Footer />  
        
        
          
        </>
      );
    }
  }