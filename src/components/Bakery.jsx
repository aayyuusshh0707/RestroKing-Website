import React from 'react'
import styled from 'styled-components'

export default function Bakery() {

  const Container = styled.div`

  img:hover{
   cursor: pointer;
    transform: rotateY(-1turn);

  transition: all .5s;
  }
 .Bcakery_sec {
  padding:5%;
 }
 .card:hover:before {
    opacity: 1;
    transition: all .5s;
    top: -40px;
}
.Bcakery_sec{
  background-image: url("https://restroking.dexignzone.com/react/static/media/bg5.74609cce.jpg");
  height: 100%;
  background-size: cover;
}
.card:before {
    content: 'Bakery';
    font-weight: 400;
    color: #fff;
    background-color: #5fcac7;
    font-size: 14px;
    padding: 2px 15px;
    opacity: 0;
    transition: all .5s;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
}
    .card{
    margin:6px;}
  `
  return (
    <>
      <Container >
        <div className='Bcakery_sec '>
          <div className="row m-4 justify-content-center ">
            <div className="col-xl-2 col-md-4 col-6 mb-4 card   ">
              <img className="img-fluid object-fit-cover " src='https://restroking.dexignzone.com/react/static/media/logo1.4fb43442.jpg'></img>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mb-4 card  ">

              <img className="img-fluid object-fit-cover" src='https://restroking.dexignzone.com/react/static/media/logo2.bfe11ed4.jpg'></img>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mb-4 card ">

              <img className="img-fluid object-fit-cover" src='https://restroking.dexignzone.com/react/static/media/logo3.8c6e026b.jpg'></img>
            </div>

            <div className="col-xl-2 col-md-4 col-6 mb-4 card ">

              <img className="img-fluid object-fit-cover" src='https://restroking.dexignzone.com/react/static/media/logo4.5c809f3f.jpg'></img>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mb-4 card ">
              <img className="img-fluid object-fit-cover" src='https://restroking.dexignzone.com/react/static/media/logo5.3de091e4.jpg'></img>
            </div>



          </div>
        </div>
      </Container>
    </>
  )
}
