import React from 'react'
import styled from 'styled-components'
import post from '../assets/img/foot.jpg'

const Container = styled.div`
 
  .footer {
    position: relative;
    background-image: url("https://restroking.dexignzone.com/react/static/media/bg2.18816c4f.jpg");
    height: 100%;
    background-size: cover;
    padding: 5% 2% 0% 2%;
    color: white;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .5);
  }
  h2 {
  font-size:25px;
    border-bottom: 1px solid hsla(0, 0%, 65.5%, .5);
     font-family: "Amita", serif;
  }
  .footer::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    background-size: 80px;
    background-position: bottom;
    left: 0;
    z-index: 1;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAAdCAMAAACOhmlvAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA4J9AIGDvEM+/f1Cv5jCPbkvDkNMoJoGbAAABQElEQVRYw+3Y7WqEMBCF4ZlMPjSJdXWb+7/VQhc6sGmRmpjzx/cKHo4MSKjcvbqXuJd4j0gkRTMVVJxjEkExFPBTSIbL6LxxQQmDGQqo+zC+jMubRIRh1IA6N5cxTS5gGTWg/iLl+rIQiqGA4+zVWxgLZCgAvgWc8QLAt8gnGBiAIubSv1lQDAWcSKbSN04NDARAc1z65R8NDBBAC9GXTq0BxVBAUzb3uU8LZdQA0J2yABkKaM/5tvuMWIYC2guxnM8EFEMBHbMGcp81AwbQ5MwvziQohgIuSLj8L3Z0QcIwgOYYvoMyQABFwHf4ZiyHgOUAMOhQp8sZG7f+Wbd3/M5ohAa0LX8ClgcNKrh88D44pG3/XbDRyIIzXBl8doFGZuM7gqOl8VmJ6z4x+4U/9zUmS4CCPDOz9555fqaGD/EF5JdWu0QMxwoAAAAASUVORK5CYII=");
    top: 0;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
    li{
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight:400;
    color: #fff;
    padding-top:5%;
    
    }
    i{
    padding-right:3%;
    }
    p{
    font-family:'Amita';
    font-size: 19px;
    }
    a{
    font-size:20px;
    font-family:'Amita';
     color: #5acac7;
    }
     .fad{
         font-family: "Poppins", sans-serif;
        font-size:12px;
        color:#fff;
     }
        .copy-right>p{
        background-color:#5acac7;
        padding: 25px 0 25px 25px;
        color: #fff;
         font-size: 14px;
        font-family: "Poppins", sans-serif;
        }
   
`

export default function Footer() {
  return (
    <Container>
      <footer className="footer">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <h2>Contact Us</h2>
            <ul>
              <li><i className="fa-solid fa-location-dot" style={{ color: "#74C0FC" }} />
                Marmora City, Vietnam</li>
              <li><i className="fa-solid fa-phone" style={{ color: "#74C0FC" }} />
                0800-123456</li>
              <li><i className="fa-solid fa-mobile" style={{ color: "#74C0FC" }} />
                (+91) 0800-123456</li>
              <li><i className="fa-solid fa-envelope" style={{ color: "#74C0FC" }} />
                info@example.com</li>
            </ul>
          </div>

          <div className="col-xl-3 col-md-6 mb-4 mini">
            <h2>Recent Post</h2>
            <ul>
              <li>
                <p>
                  <img className="rounded float-start p-1" src={post} alt="Post 1" />
                  <a>The Background Of Bakery Now</a>
                  <div className='fad'><i className="fa-solid fa-stopwatch" style={{ color: "#74C0FC" }} />
                    March 25, 2020</div>


                </p>
              </li>

              <br />
              <li>
                <p>
                  <img className="float-start rounded p-1" src={post} alt="Post 2" />
                  <a>The Background Of Bakery Now</a>
                  <div className='fad'><i className="fa-solid fa-stopwatch" style={{ color: "#74C0FC" }} />
                    March 25, 2020</div>
                </p>
              </li>
            </ul>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <h2>Quick Links</h2>
            <div className='row'>
              <div className="col">
                <li>About Us</li>
                <li>Contact Us</li>
                <li> FAQ</li>


              </div>
              <div className="col">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>FAQ</li>
                <li>FAQ</li>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <h2>Opening Hours</h2>
            <ul>
              <p>Our support available to help you 24 hours a day, seven days a week.</p>
              <li>Monday to Friday.............7AM - 5PM</li>
              <li>Saturday to Sunday.......8AM - 4PM</li>
              <li>Sunday.............................................Closed</li>
            </ul>
          </div>
        </div>

      </footer>
      <div className='copy-right'>
        <p>Copyright © 2021 DexignZone. all rights reserved.</p>
      </div>
    </Container>
  )
}
