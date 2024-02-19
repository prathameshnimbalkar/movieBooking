import React from "react";

function slider() {
    return(
    <>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" style={{overflowX: 'hidden' }}>
  <div class="carousel-inner" style={{ borderRadius: '10px', overflowX: 'hidden' }}>
    <div class="carousel-item active">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1707805193784_joramstreamweb.jpg" class="d-block w-100" alt="third_img"/>
      
    </div>
    <div class="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1706382336630_web.jpg" class="d-block w-100" alt="first_img"/>
    </div>
    <div class="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1706695116599_web.jpg" class="d-block w-100" alt="second_img"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
    );
}

export default slider;