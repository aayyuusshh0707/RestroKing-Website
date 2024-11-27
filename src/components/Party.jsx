import React from 'react'
import Cardd from './Cardd'
import In_Party from './In_Party'
import styled from 'styled-components';

const StyledContainer = styled.div`

.containerParty {
  min-height: 100vh; 
  padding-top:20px;
  padding-bottom: 20px; 
}
}
  .cake{
  height:93vh;
  padding-top:5%;
  }
  @media (max-width: 768px) {
  .d_Head {
    font-size: 26px;
  }
  .d_img > img {
    max-height: 98px;
  }
    .d_body{
    font-size:18px;
    }
    .d_foot {
    font-size: 18px;
    }
       .cards_grid {
    flex-direction: column;
  }
      .Card- > img {
    max-height: 300px;
    width:100%;
  }

  }
  @media (max-width: 480px) {
    .Card- > img {
    max-height: 200px;
    width:100%;
  }
 
   .d_Head {
    font-size: 26px;
  }
  .d_img > img {
    max-height: 98px;
  }
    .d_body{
    font-size:18px;
    }
    .d_foot {
    font-size: 18px;
    }
     .cards_grid {
    flex-direction: column;
  }
  
  `;

export default function Party() {

  return (
    <>
      <StyledContainer>
        <div className='containerParty'>

          <div className="cards_grid container ">
            <div>
              <Cardd img='https://restroking.dexignzone.com/react/static/media/pic1.f2ee9110.jpg'
                title='Macarons'
                sub='Lorem Ipsum is simply'
              /></div>
            <div> <Cardd img='https://restroking.dexignzone.com/react/static/media/pic2.0fd52add.jpg'
              title='Small Cakes'
              sub='Lorem Ipsum is simply'
            /></div>
            <div><Cardd img='https://restroking.dexignzone.com/react/static/media/pic3.8e9a81df.jpg'
              title='Occasion Cakes'
              sub='Lorem Ipsum is simply'
            /></div>
            <div>  <Cardd img='https://restroking.dexignzone.com/react/static/media/pic4.e3b384b5.jpg'
              title='Cupcakes'
              sub='Lorem Ipsum is simply'
            /></div>
          </div>
          <div className='cake'>
            <In_Party
              head='It’s a party and you’re invited'
              body='Join DexignZone Bakery™ to earn Gold level benefits like free Cakes and food, get free refills, pay and order with your phone, and more.'
              foot='Exclusive deals on Cakes, delivered straight to your inbox Join Now' /></div>

        </div>
      </StyledContainer>
    </>
  )
}
