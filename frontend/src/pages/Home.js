import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Movies from "../components/Movies";
import Popular from "../components/Popular";
import Footer from "../components/Footer";




export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Slider />
        <Movies />
        <Popular />
        <Footer />
        
      </>
    );
  }
}


