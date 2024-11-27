import React from 'react'
import Accordian from './Accordian'
import styled from 'styled-components'

export default function () {

  const StyledComponenet = styled.div`
  .delivery_sec{
  background-image: url('https://restroking.dexignzone.com/react/static/media/bg1.2621b4de.jpg');
  padding:9% 4% 9% 4%;
  background-repeat: no-repeat; 
  }
  p{
 font-size: 18px;
 font-weight:400;
 margin-bottom:3%;
  }
  a{
  font-weight: 700;
  border-bottom: 1px dashed;
}
  h3{
    font-weight:800;
    font-size: 43px;
    line-height: 1.3;
    font-family: "Amita", serif;
  }
  h6{
 color: #AAAAAA;
 padding-bottom:20px;
 font-size: 18px;

  }
  span{
  padding-left:14px;
  font-size:17px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
  h3{
    font-size: 29px;
    }
    h6{
    font-size: 15px;
    }
    p{
    font-size: 13px;
    }
  }
  @media (max-width: 480px) {
   h3{
    font-size: 34px;
    }
    h6{
    font-size: 15px;
    }
    p{
    font-size: 14px;
    }
  .blo{
  display:flex;
  flex-direction:column;
  }
  }

  `
  return (
    <>
      <StyledComponenet>
        <div className="delivery_sec">
          <div className='row blo '>
            <div className='col mb-4 '>
              <div className="blog">
                <h3>Sale And Delivery Points
                </h3>
                <h6>Where to buy our high quality Cake</h6>
                <div className='line'></div>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <p>  First and foremost I am a chef, whether behind the stove at one of my Northern California restaurants or for the past 15 years in front of the Lorem Ipsum is simply <a>Bakery</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>

                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>



              </div>
              <button className='buttondef '>Get Started</button>


            </div>
            <div className='col '>
              <Accordian />
            </div>
          </div>


        </div>
      </StyledComponenet>

    </>
  )
}
