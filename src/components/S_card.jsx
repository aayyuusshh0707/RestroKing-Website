import React from 'react'



export default function S_card({ img, item }) {



  return (
    <>
      <div className="card  shadow">
        <img
          src={img} className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">{item}</h5>
        </div>
      </div>
    </>
  )
}
