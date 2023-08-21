import React from 'react'
import "./Main.css";
import { useNavigate } from "react-router-dom"
import Footer from './footer';
import SvgDown from '../DataNavItems/SvgDown';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
      <svg className='svgImage' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
<br /><br />
        
        {/* <hr style={{ marginLeft: "0px" }} /> */}
        <div className="container">
          <div className="row">
            <div className='col-lg-6'>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/3906333/pexels-photo-3906333.jpeg?auto=compress&cs=tinysrgb&w=800" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/7156184/pexels-photo-7156184.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/36785/soldier-military-uniform-american.jpg?auto=compress&cs=tinysrgb&w=800" alt="Third slide" />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="row">
                <div className="container">
                  <div className=" col-12"> <button className='btDonate' onClick={() => navigate("/HomePage")}> Donate Your old goods </button></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <div className="row">
                  <div>
                    <div className="container">
                      <div className="row btnCombo">
                        <div className=" col-6"> <button className='btnm' onClick={() => navigate("/MainData")}> Donate Someone </button></div>
                        <div className=" col-6"> <button className='btnm' onClick={() => navigate("/InputForm")}>Post a Request</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container"><div className="row">
                <div className="textField"><p>ONE STEP FOR HUMANITY</p></div>
              </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className=" textField2"><p>Vasudhaiva Kutumbakam</p></div>
                </div>
              </div>
            </div>
          </div><br /><br />
        </div>
      </div>

      <Footer/>
      <SvgDown/>
      {/* <svg className='svgPic' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
    </>
  )
}

export default Main;
