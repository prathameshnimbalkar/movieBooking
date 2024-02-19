import React from "react";
import './Prac.css'; 

function Prac() {
  return (
    <>
    <div style={{ backgroundColor: '#c0dffc' }}>
        <br/>
   <div class="rowz">
    <div class="cola">
    <div class="polaroid">
      <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fighter-et00304730-1704191105.jpg' alt="5 Terre" style={{width:'100%', borderRadius:'10px'}}/>
      <br/>
    </div>
    </div>
    <div class="col">
        <div className="col" id="title">
          <h3>Movie Title</h3>
        </div>
        <div className="col">
          <h4>Duration</h4>
        </div>
        <div className="col">
          <h4>Release Date</h4>
        </div>
        <div className="col">
          <h4>Language</h4>
        </div>
        <div className="col">
          <h4>Genre</h4>
        </div>
        <div className="col">
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  </p>
        </div>
        <button type="button" class="btn btn-outline-dark">Book Ticket</button>
    </div>
    </div>
    <br/>
  </div>
  
    </>
  );
}

export default Prac;
