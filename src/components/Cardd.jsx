import React from 'react'
export default function Cardd({ title, sub, img }) {
  return (
    <>
      <div className='Card- '>
        <img className='img-fluid' src={img}></img>
        <div className='card-body '>
          <h5 className='card-title '>{title}</h5>
          <p className='card-text'>{sub} </p>
          <span className='line'></span>
          <button className='buttondef'>More Details<i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </>
  )
}

