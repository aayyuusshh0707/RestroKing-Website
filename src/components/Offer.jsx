import React from 'react'
import styled from 'styled-components';
import Offer_grid from './Offer_grid';


export default function Offer() {

  const StyledContainer = styled.div`
  .offer::after,
  .offer::before {
  content: "";
   position: absolute;
  width: 100%;
  height: 8px;
  background-size: 80px;
  background-position: bottom;
  left: 0;
  z-index: 1;
}
  .offer::after{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAAdCAMAAACOhmlvAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA4J9AIGDvEM+/f1Cv5jCPbkvDkNMoJoGbAAABQElEQVRYw+3Y7WqEMBCF4ZlMPjSJdXWb+7/VQhc6sGmRmpjzx/cKHo4MSKjcvbqXuJd4j0gkRTMVVJxjEkExFPBTSIbL6LxxQQmDGQqo+zC+jMubRIRh1IA6N5cxTS5gGTWg/iLl+rIQiqGA4+zVWxgLZCgAvgWc8QLAt8gnGBiAIubSv1lQDAWcSKbSN04NDARAc1z65R8NDBBAC9GXTq0BxVBAUzb3uU8LZdQA0J2yABkKaM/5tvuMWIYC2guxnM8EFEMBHbMGcp81AwbQ5MwvziQohgIuSLj8L3Z0QcIwgOYYvoMyQABFwHf4ZiyHgOUAMOhQp8sZG7f+Wbd3/M5ohAa0LX8ClgcNKrh88D44pG3/XbDRyIIzXBl8doFGZuM7gqOl8VmJ6z4x+4U/9zUmS4CCPDOz9555fqaGD/EF5JdWu0QMxwoAAAAASUVORK5CYII=");
    top: 0;
  }
  .offer::before{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAAdCAMAAACOhmlvAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA4J9AIGDvEM+/f1Cv5jCPbkvDkNMoJoGbAAABQElEQVRYw+3Y7WqEMBCF4ZlMPjSJdXWb+7/VQhc6sGmRmpjzx/cKHo4MSKjcvbqXuJd4j0gkRTMVVJxjEkExFPBTSIbL6LxxQQmDGQqo+zC+jMubRIRh1IA6N5cxTS5gGTWg/iLl+rIQiqGA4+zVWxgLZCgAvgWc8QLAt8gnGBiAIubSv1lQDAWcSKbSN04NDARAc1z65R8NDBBAC9GXTq0BxVBAUzb3uU8LZdQA0J2yABkKaM/5tvuMWIYC2guxnM8EFEMBHbMGcp81AwbQ5MwvziQohgIuSLj8L3Z0QcIwgOYYvoMyQABFwHf4ZiyHgOUAMOhQp8sZG7f+Wbd3/M5ohAa0LX8ClgcNKrh88D44pG3/XbDRyIIzXBl8doFGZuM7gqOl8VmJ6z4x+4U/9zUmS4CCPDOz9555fqaGD/EF5JdWu0QMxwoAAAAASUVORK5CYII=");
    bottom: 0;
    transform: rotate(180deg);
  }

  .offer{
 position: relative;
  background-image:url("https://restroking.dexignzone.com/react/static/media/bg4.0ce4d4c0.jpg") ;
  background-size:cover;
  height:100%;
  background-attachment: fixed;
  color:white;
  padding-top: 100px;
  padding-bottom: 70px;
  }
  .o_head{
  font-size: 45px;
  line-height: 1.3;
  font-weight: 600;
  font-family: "Amita", serif;
  }
  .o_body{
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-top: 0;
    font-weight: 500;
    color: #aaa;
    font-size: 19px;
  }
  .container >div{
    padding-top:2%;

  }
  @media (max-width: 480px) {
   .o_head {
    font-size: 33px;
    }
  }
  `
  return (
    <>
      <StyledContainer>
        <div className='offer'>
          <div className='container text-center'>
            <div className='o_head'>What Do We Offer For You?</div>
            <div className='o_body'><p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p></div>

            <center> <div className='line mt-4'></div></center>
            <Offer_grid />
          </div>
        </div>
      </StyledContainer>
    </>
  )
}
