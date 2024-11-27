import React from 'react'

export default function Carousel() {
  return (
    <><div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />

      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img src="https://restroking.dexignzone.com/react/static/media/slide2.367450de.jpg" className="d-block w-100" alt="..." />
          <div className=" itemm carousel-caption d-none d-md-block">
            <h5>Cakes & Bakery</h5>
            <h1>Welcome To Bakery</h1>
            <p className='pb-2 '> The Best Cakes</p>
            <button className='buttondef'>About Us</button>
            <button className='buttonhov ms-2'>Subscribe Now</button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src="https://restroking.dexignzone.com/react/static/media/slide1.9e7b0e2d.jpg" className="d-block w-100" alt="..." />
          <div className=" itemm carousel-caption d-none d-md-block">

            <h5>Cakes & Bakery</h5>
            <h1> Occasion Cakes </h1>
            <p> The Best Coffee In China</p>
            <button className='buttondef'>About Us</button>
            <button className='buttonhov ms-2'>Subscribe Now</button>
          </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  )
}
