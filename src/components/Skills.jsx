import React from 'react'
import S_card from './S_card'
import Party from './In_Party'
import styled from 'styled-components'

export default function Skills() {
  const Container = styled.div` 
  .Skills{
  background-image: url('https://restroking.dexignzone.com/react/static/media/bg1.2621b4de.jpg');
  background-repeat: no-repeat; 
  }
  .row{
  margin:2%;
  position: relative;
  }
  h1{
  font-family: "Poppins", sans-serif;
  color:#5acac7;
  font-weight: 600;
  font-size: 90px;
  line-height: 90px;
  }
.card {
  position: relative;
  overflow: hidden; 
  border-radius: 8px;
  transition: all 0.3s ease-in-out; 
}
.card-img-top  {

  object-fit: cover;
  transition: transform 0.3s ease-in-out; 
}

.card:hover .card-img-top  {
-ms-transform: scale(4.6);     
-webkit-transform: scale(1.5);
transform: scale(1.5);
cursor:pointer;
}

.card::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  width: 100%;
background-image: linear-gradient(0deg, #005b5f, rgba(0, 24, 23, 0));
  border-radius: 4%;
}@media (max-width: 480px) {

.card >img{
height:240px;
object-fit:cover;
}}

`
  return (
    <>
      <Container>
        <div className='Skills'>
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <S_card
                img='https://restroking.dexignzone.com/react/static/media/pic1.81227e0f.jpg'
                item='Vegan pie' />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <S_card
                img='https://restroking.dexignzone.com/react/static/media/pic2.df4c75db.jpg'
                item='Lemon cake' />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <S_card
                img='https://restroking.dexignzone.com/react/static/media/pic3.9c7f05c6.jpg'
                item='   Wedding cake' />
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <S_card
                img='https://restroking.dexignzone.com/react/static/media/pic2.df4c75db.jpg'
                item='Fruit cake' />
            </div>
          </div>
          <div className='cakee'>

            <Party head='We Are Professional at Our Skills'
              body='More than 2000+ customers have trust in Our Cakes'
            />
          </div>
          <div className='num'>
            <div className="row text-center">
              <div className="col-xl-3 col-md-6 mb-4">
                <h1>53+</h1>
                <h5>Years of Experience</h5>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <h1>102</h1>
                <h5>Awards Wins</h5>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <h1>36k</h1>
                <h5>Happy Clients</h5>

              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <h1>99</h1>
                <h5>Years of Experience </h5>
              </div>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}
