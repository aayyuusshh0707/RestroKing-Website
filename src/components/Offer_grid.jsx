import React from 'react'
import Pancake from '../assets/img/pancake.png'
import muffels from '../assets/img/muffels.png'
import cake from '../assets/img/cake.png'
import pumpkin from '../assets/img/pumpkin.png'
import tea from '../assets/img/tea.png'
import styled from 'styled-components';
import Offer_Card from './offer_Card'

export default function Offer_grid() {
  const StyledContainer = styled.div`
  .i_head >h4{
  font-family: "Amita", serif;
  font-size: 28px;

  }
  .i_foot{
  font-family:"Quicksand" ;
  font-size: 18px; 
  }

  @media (min-width: 480px) and (max-width: 768px) {
  .i_head >h4{
  font-size: 20px;
  }
  .i_foot{
  font-size: 11px;
  }
}
  `
  return (
    <>
      <StyledContainer>
        <div className="container mt-3">
          <div className="row  ">
            <div className="col-md-4  ">
              <img
                src="https://restroking.dexignzone.com/react/static/media/pic1.45eaf820.jpg"
                alt="Image"
                className="img-fluid h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-4 ">
              <div className="row h-100">
                <Offer_Card img={Pancake}
                  Product='Pancake'
                  desc='Lorem Ipsum is dummy' />
                <Offer_Card img={pumpkin}
                  Product='Pumpkin cakes'
                  desc='Lorem Ipsum is dummy' />
                <Offer_Card img={tea}
                  Product='Cake Services'
                  desc='Lorem Ipsum is dummy' />
              </div>
            </div>
            <div className="col-md-4">
              <div className="row h-100">
                <Offer_Card img={muffels}
                  Product='Muffin'
                  desc='Lorem Ipsum is dummy' />
                <Offer_Card img={tea}
                  Product='Pumpkin Cupcakes'
                  desc='Lorem Ipsum is dummy' />
                <Offer_Card img={cake}
                  Product='Birthday Cake'
                  desc='Lorem Ipsum is dummy' />
              </div>
            </div>

          </div>
        </div>
      </StyledContainer>

    </>
  )
}
