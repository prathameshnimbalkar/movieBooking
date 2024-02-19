import './Theater.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
 
export default function Theater() {
  const [date, setDate] = useState(new Date());
    return (
      <>
 
  <nav class="navbar navbar-dark" style={{border:'1px solid #d0d5e6', padding:'10px 65px 10px 65px'}}>
  <DatePicker selected={date} onChange={(date) => setDate(date) } />
    <span class="navbar-text-left">
        Endless Entertainment Anytime !!
       
    </span>
   
   
  </nav>
      <br/>
    <div class="container text-center">
 
        <div className="roww">
          <div class="col-5">
            <h4>Movie Theater 1</h4>
            <p>Movie Name Movie Name ame Movie Movie Name Movie Name ame Moviev vMovie Name Movie Name ame Movie</p>
            <h6>Language</h6>
            <h5><u>Price</u></h5>
           
 
          </div>
          <div class="time-button">
         
          <button type="button" class="btn btn-outline-success btn-lg" >12:00 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">3:10 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">12:00 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">3:10 PM</button><br></br><br></br>
         
          </div>
        </div>
 
        <div class="roww">
          <div class="col-5">
            <h4>Movie Theater 2</h4>
            <p>Movie Name Movie Name ame Movie Movie Name Movie Name ame Moviev vMovie Name Movie Name ame Movie</p>
            <h6>Language</h6>
            <h5><u>Price</u></h5>
           
 
          </div>
          <div class="time-button">
         
          <button type="button" class="btn btn-outline-success btn-lg">12:00 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">3:10 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">12:00 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">3:10 PM</button><br></br><br></br>
         
          </div>
        </div>
 
        <div class="roww">
          <div class="col-5">
            <h4>Movie Theater 3</h4>
            <p>Movie Name Movie Name ame Movie Movie Name Movie Name ame Moviev vMovie Name Movie Name ame Movie</p>
            <h6>Language</h6>
            <h5><u>Price</u></h5>
           
 
          </div>
          <div class="time-button">
         
          <button type="button" class="btn btn-outline-success btn-lg">12:00 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">3:10 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">12:00 PM</button>
         
          <button type="button" class="btn btn-outline-success btn-lg">3:10 PM</button><br></br><br></br>
         
          </div>
        </div>
    </div>
 
   
 
      </>
    );
  }