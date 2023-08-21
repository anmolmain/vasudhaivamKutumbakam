import React from 'react'
import CarasoulNav from '../DataNavItems/CarasoulNav'
import SvgDown from '../DataNavItems/SvgDown'
import "./Working.css"
import './styling.css'

const Working = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 520"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L40,80C80,128,160,224,240,240C320,256,400,192,480,144C560,96,640,64,720,80C800,96,880,160,960,170.7C1040,181,1120,139,1200,106.7C1280,75,1360,53,1400,42.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      <div className="row">
        <div className="col-lg-6"><div class="bg-text">
          <h1>Working of this website</h1>
          <h4>This website is like a Platform where one can Post their requirement . Not only one who seeks for help is able to upload their request, But anyone who see any Advertisement or see someone who need help , just post their details and their problem with their concent. Someone from this website will see their Post and come to know about their requirement . If it is possible for them , They can directly help them</h4>
          <br />  <hr /><br /><h3>Note :<br /><br /> This is a Non-Profit Platform which means the money that sender sends will be 100% credited to receiver's account <sup>(except bank charges)</sup>and whole transition takes place between Sender and Receiver without intervention of website</h3>
          <h3>This website is just a Platform for sharing such Ad's , Before Making a transaction Please make sure at your end that the case is genuine </h3>
        </div></div>
        <div className="col-lg-6">
          <br />
          <CarasoulNav />
        </div>
      </div>
      <SvgDown></SvgDown>
    </>
  )
}

export default Working
