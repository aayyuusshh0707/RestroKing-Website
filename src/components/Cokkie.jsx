import React from 'react'
import styled from 'styled-components'
import cokkie from '../assets/img/pancake.png'


export default function Cokkie() {

  const Conatiner = styled.div`


.Text_sec{
 background-color: #5acac7;
 
}
 .img-fluid{
 height:100%;
 object-fit:cover;
 }
 h3, h5{
 color: white;
 font-family: "Amita", serif; 
 padding:3%;
 }
 p{
 color: white;
 font-size:18px;
  padding:2%;
 }
 .Cokkie_sec{
 display: flex;
 flex-direction:row;
 margin:2%;
 }
 button{
 margin-top:6%;
 }
 .btnn{
 background-color: #007e84;
 padding:2% 8% 2% 8%;
 font-size:18px
 
 }
 @media (max-width: 480px) {
  .Cokkie_sec{
 display: flex;
 flex-direction: column;
 }

  
  `
  return (
    <>
      <Conatiner>
        <div className='Cokkie_sec row '>

          <div className="img_sec col">
            <img className='img-fluid' src="https://restroking.dexignzone.com/react/static/media/pic3.b66be145.jpg"></img>
          </div>
          <div className="Text_sec col text-center p-5  ">
            <h3>Limited Time Offer</h3>
            <h5>Wedding Cake Sale</h5>
            <img src={cokkie}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <button className='buttondef btnn'>GET NOW</button>
          </div>
        </div>

      </Conatiner>
    </>
  )
}
