import React from 'react'
import styled from 'styled-components'

export default function Accordian() {
  const StyledComponent = styled.div`

  .a_img{
  float:left;
  margin:0 1% 0 0;
  }
  p{
  font-family: "Poppins", sans-serif;
  font-size: 16px;
}
  button{
    color: #fff;
    background-color: #5fcac7;
  
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    padding: 20px 40px 20px 25px;
  }
   .accordion_sec{
   margin:1%
   }
   .accordion-flush>.accordion-item>.accordion-header .accordion-button,  {
    border-radius: 13px;
      margin-top:1%;
}
       @media (min-width: 480px) and (max-width: 768px) {
 .col> span{
    font-size: 10px;
    }
    span {
    padding-left: 7px;}
    p{
     font-size: 12px;
    }
     i{font-size: 13px;
     }
  }
  @media (max-width: 480px) {
  .col> span{
    font-size: 13px;
    }
    span {
    padding-left: 7px;}
    p{
     font-size: 13px;
    }
     i{font-size: 13px;
     }}
  `
  return (
    <>
      <StyledComponent>
        <div className='accordion_sec'>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <i className="fa-solid fa-cart-shopping"></i><span>Where buy our Cake?</span>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <img className='img-fluid rounded' src='https://restroking.dexignzone.com/react/static/media/map.1c1e8ec0.png'></img>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>

                  </div>
                  <div className='row mt-2'>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                    <div className='col'><i className="fa-solid fa-check" style={{ color: "#74C0FC" }} /><span>Germany (26)</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <i className="fa-solid fa-address-book"></i><span> Become our dealer</span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>  <img
                    src="https://restroking.dexignzone.com/react/static/media/pic2.e883363e.jpg"
                    alt="Cupcakes"
                    className="img-fluid rounded a_img"
                  />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five
                    centuries, Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five
                    centuries

                  </p>

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <i className="fa-solid fa-tag"></i> <span>Get your doscount</span>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to demonstrate
                  the <code>.accordion-flush</code> class. This is the third item's
                  accordion body.
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledComponent>
    </>
  )
}
