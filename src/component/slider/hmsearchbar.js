import React,{useState} from 'react'

const Hmsearchbar = () => {
const[data,setData]=useState();

  return (
    <>
    <section className='homeSearchbar'>
      <h3>SELECT YOUR VEHICLE</h3>
      <p>Over <b>500,000</b> Automotive and Truck Parts</p>
      <select className="form-select" aria-label="Default select example" onChange={(e)=>{
          const searchVal=e.target.value;
          setData(searchVal);
      }}>
  <option selected>What are you looking for?</option>
  <option value="wheels">Wheels</option>
  <option value="tires">Tires</option>
</select>
<select className="form-select" aria-label="Default select example">
  <option selected>Select Year</option>
  <option value="wheels">Wheels</option>
  <option value="tires">Tires</option>
</select>
<select className="form-select" aria-label="Default select example">
  <option selected>Select Make</option>
  <option value="wheels">Wheels</option>
  <option value="tires">Tires</option>
</select>
<select className="form-select" aria-label="Default select example">
  <option selected>Select Model</option>
  <option value="wheels">Wheels</option>
  <option value="tires">Tires</option>
</select>
<select className="form-select" aria-label="Default select example">
  <option selected>Select Submodel</option>
  <option value="wheels">Wheels</option>
  <option value="tires">Tires</option>
</select>
<button type="button" className="btn btn-search">Search</button>
<div classname="showVal">{data}</div>
      </section>
    </>
  )
}

export default Hmsearchbar
