// import React from "react";
// import { Link } from "react-router-dom";
import React from "react";
import '../index.css';
export default function MovieList() {
  return (
    <>
    <div className='service-section service-three pt-0 section-padding'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-12 wow fadeIn'
            data-wow-duration='.7s'
            data-wow-delay='.1s'
          >
            <div className='section-title-center section-head text-left'>
              <br/>
              <br />
              <h4 className='title'>Recommended Movies</h4>
            </div>
          </div>
        </div>
        <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n25' >
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.1s'
            >
              <div className='blog-thumbnail'style={{ borderRadius: '10px', overflow: 'hidden' }} >
                <a href='blog-details.html' className='image'>
                  <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fighter-et00304730-1704191105.jpg' alt='Blog' />
                </a>
              </div>
              <br/>
              <div className='blog-info'>
                <h4>Amir khan</h4>
                <h6 >Lorem Ipsum is simply dummy text</h6>
              </div>
            </div>
          </div>
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.2s'
            >
              <div className='blog-thumbnail' style={{ borderRadius: '10px', overflow: 'hidden' }} >
                <a href='blog-details.html' className='image'>
                  <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/teri-baaton-mein-aisa-uljha-jiya-et00383266-1707806462.jpg' alt='Blog ' />
                </a>
              </div>
              <br/>
              <div className='blog-info'>
                <h4>Amir khan</h4>
                <h6 >Lorem Ipsum is simply dummy text</h6>
              </div>
            </div>
          </div>
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.3s'
            >
              <div className='blog-thumbnail' style={{ borderRadius: '10px', overflow: 'hidden' }} >
                <a href='blog-details.html' className='image'>
                  <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ole-aale-et00374968-1698927570.jpg' alt='Blog' />
                </a>
              </div>
              <br/>
              <div className='blog-info'>
                <h4>Amir khan</h4>
                <h6 >Lorem Ipsum is simply dummy text</h6>
              </div>
            </div>
          </div>
          <div className='col mb-30'>
            <div
              className='blog wow fadeIn'
              data-wow-duration='1.5s'
              data-wow-delay='.2s'
            >
              <div className='blog-thumbnail' style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <a href='blog-details.html' className='image'>
                  <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hanu-man-et00311673-1704954533.jpg' alt='Blog ' />
                </a>
              </div>
              <br/>
              <div className='blog-info'>
                <h4>Amir khan</h4>
                <h6 >Lorem Ipsum is simply dummy text</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    </>
  );
}
