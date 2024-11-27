import React from 'react'
import styled from 'styled-components'

export default function Card_C({ img, body }) {
  const Container = styled.div`
  .card-text {
  font-size:25px;
  color:#282828;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
  font-family:'Amita';
    
  }
  .nic{
  font-size: 16px;
  color:#3b3b3b;
  
  }
  .card{
  padding:3px;
  background-color: #fff;
  }
  .nic>i{
 padding-right: 2%;
  }

  `
  return (
    <>
      <Container>
        <div className="container">
          <div className="card border-0 shadow">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-bodyy p-3">
              <p className="card-text">
                {body}
              </p>
              <p className='nic '><i class="fa-regular fa-file"></i>Cake, Biscuits</p>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
}
