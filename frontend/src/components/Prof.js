import React from "react";
import './Prof.css'; 

function Prof() {
  return (
    <>
<nav class="navbar">
    <span class="navbar-text">
        Navbar text with an inline element navbar text with an inline element
    </span>
    <button type="button" class="btn btn-outline-light" style={{marginRight:"15px"}}>Sign Out</button>
</nav>


    <div style={{ backgroundColor: '#e7e9eb' }}></div>      
     <div class="container-lg">
    <div class="row">
        <h1 class="col-12">Account Details</h1><br/><br/><br/>
        <div class="col-12 col-xl-6 col-lg-6 mb-3">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" placeholder="Enter First Name" value="Prathamesh"/>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 mb-3">
            <label class="form-label">Phone Number</label>
            <input type="tel" class="form-control" placeholder="Enter Phone Number" value="+91_000_7890"/>
        </div>
        
        <div class="col-12 col-xl-6 col-lg-6 mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Enter Email" value="Parkar@example.com"/>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 mb-3">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" placeholder="Enter Last Name" value="Pune"/>
        </div>
    </div>
</div>

 


    
<div class="container-lg">
  <div class="row">
  <h1 class="col-12">Booked Tickets</h1><br/><br/><br/>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Movie Name 1</h5>
          <h6 class="card-subtitle mb-2 text-muted">User name</h6>
          <h6 class="card-subtitle mb-2 text-muted">Date and Time</h6>
          <h6 class="card-subtitle mb-2 text-muted">Number of Tickets</h6>
          
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Movie Name 2</h5>
          <h6 class="card-subtitle mb-2 text-muted">User name</h6>
          <h6 class="card-subtitle mb-2 text-muted">Date and Time</h6>
          <h6 class="card-subtitle mb-2 text-muted">Number of Tickets</h6>
          
        </div>
      </div>
    </div>
  </div>
</div>



    
    </>
  );
}

export default Prof;