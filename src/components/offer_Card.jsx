import React from 'react'

export default function ({ img, Product, desc }) {
  return (
    <>
      <div className="col-12 d-flex mt-4  justify-content-center mb-3">
        <div className="row pb-3 ">
          {/* img */}
          <div className="col-auto ">
            <img src={img} alt="Pancake" className="img-fluid" style={{ maxWidth: "100px" }} />
          </div>
          {/* text */}
          <div className="col text-white i_head ">
            <h4>{Product}</h4>
            <p className="mb-0 i_foot">{desc}</p>
          </div>
        </div>

      </div>

    </>
  )
}
