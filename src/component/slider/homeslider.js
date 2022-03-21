import React from 'react';
import Hmsearchbar from './hmsearchbar';

const Homeslider = () => {
  return (
    <>
 <section className='homeSlider'>
<div id="demo" className="carousel" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://fittedrims.com/wp-content/uploads/2021/08/item-3.jpg" alt="hh" className="d-block" />
      <div className="carousel-caption">
      <h4><span>Be Exculsive</span> <br/>See How Your Wheels Fit On The Car</h4>
    <button type='button' className='btnSlider'>Shop Wheels</button>
  </div>
    </div>
    <div className="carousel-item">
      <img src="https://fittedrims.com/wp-content/uploads/2021/08/tire_rims.jpg" alt="hh" className="d-block" />
      <div className="carousel-caption">
    <h4>Best Tire <span>Warranty</span> <br/>In The Business</h4>
    <button type='button' className='btn btnSlider'>Shop Wheels</button>
  </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
<Hmsearchbar/>
</section>
    </>
  )
}

export default Homeslider
