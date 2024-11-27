import React from 'react'
import In_Party from './In_Party'
import Card_C from './Card_C'
import styled from 'styled-components'

export default function Closing() {
  const Container = styled.div`
  .closing{
  padding:2% 5% 2% 5%;
  background-image: url("https://restroking.dexignzone.com/react/static/media/bg5.74609cce.jpg");
  height: 100%;
  background-size: cover;
  }
  `
  return (
    <>
      <Container>
        <div className="closing">
          <div className='inparty'>

            <In_Party
              head='From The Blog'
              body='Latest news and updatesk'
            />
          </div>
          <div className='Crads_ Container-fluid  '>
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <Card_C img='https://restroking.dexignzone.com/react/static/media/pic1.321ba415.jpg'
                  body='Understand The Background Of Bakery Now.' />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <Card_C img='https://restroking.dexignzone.com/react/static/media/pic2.9caf32f6.jpg'
                  body='Seven Reliable Sources To Learn About Bakery.' />
              </div>
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <Card_C img='https://restroking.dexignzone.com/react/static/media/pic3.6acd46d4.jpg'
                  body='Ten Places That You Can Find Bakery.' />
              </div>

            </div>
          </div>


        </div>

      </Container>

    </>
  )
}
