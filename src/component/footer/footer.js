import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="footerMain">
<div className="container">
    <div className='footerTop'>
    <div className="row">
        <div className='col-8'>
            <img src='https://fittedrims.com/wp-content/uploads/2021/09/white_logo-1.png'/>
        </div>
        
        <div className='col-4'>
            <h2>SUBSCRIBE TO RECEIVE PROMOTIONAL UPDATES</h2>
            <div class="input-group mb-3 subscribeBox">
  <input type="text" class="form-control" placeholder="Email Address *" />
  <button class="btn btn-outline-secondary" type="button" id="subscribe">Subscribe!</button>
</div>
        </div>
        </div>
    </div>
<div className='footerBottom'>
    <div className='row'>
    <div className='col-8'>
        <ul>
            <li><a href='#'>Shipping Information</a></li>
            <li><a href='#'>Return Policy</a></li>
            <li><a href='#'>Warranty Policy</a></li>
            <li><a href='#'>Sitemap</a></li>
            <li><a href='#'>Terms of Use</a></li>
            <li><a href='#'>Privacy Policy</a></li>
        
        </ul>
        </div>
        <div className='col-4'>
            <span className="copyrights">Fitted Rims © 2021 All Rights Reserved.</span>
        </div>
    </div>
</div>

</div>

      </section>
    </>
  )
}

export default Footer
