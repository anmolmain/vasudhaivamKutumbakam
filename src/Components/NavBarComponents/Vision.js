import React from 'react'
import './styling.css'
import SvgDown from '../DataNavItems/SvgDown'
const Vision = () => {
  return (

    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 520"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L40,80C80,128,160,224,240,240C320,256,400,192,480,144C560,96,640,64,720,80C800,96,880,160,960,170.7C1040,181,1120,139,1200,106.7C1280,75,1360,53,1400,42.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <br /><br />
      <div className='container'><div className="row">
        <div className="col-lg-6">
          <div className="bg-text" style={{ padding: "5%", margin: "0%", width: "100%" }}>
            <div style={{ textAlign: "center", fontFamily: "Lora" }}>
              <br />
              <p style={{ fontSize: '2.5rem', fontWeight: '900', textAlign: "center", fontFamily: "Lora" }}>Vasudhaiva Kutumbakam</p><br />
              <hr /> <p style={{ fontSize: '1.5rem', fontWeight: '300', textAlign: "center", fontFamily: "Lora" }}>Vasudhaiva Kutumbakam is a Sanskrit phrase, which means "The World Is One Family"</p>
              <hr /><br /><br />
              <p style={{ fontSize: '1rem', fontWeight: '100', textAlign: "center", fontFamily: "Lora" }}>We all are kids of one Lord . This is our duty to help our brothers and sisters whenever they need help from us. However it is impossible to help everyone, But we can help someone. </p>
              <p style={{ fontSize: '1rem', fontWeight: '100', textAlign: "center", fontFamily: "Lora" }}>This website is like a Platform where one can Post their requirement . Not only one who seeks for help is able to upload their request, But anyone who see any Advertisement or see someone who need help , just post their details and their problem with their concent. Someone from this website will see their Post and come to know about their requirement . If it is possible for them , They can directly help them</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img id='image' src={"https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=800"} alt="" />
        </div>
        <SvgDown />
      </div>
      </div>
    </>
  )
}

export default Vision
