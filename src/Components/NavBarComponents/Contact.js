import React from 'react'
import emailjs from "emailjs-com"
import "./Contact.css"
import SvgDown from '../DataNavItems/SvgDown'
const Contact = () => {
  const sendMail = (e) => {
    e.preventDefault();
    emailjs.sendForm()


  }
  return (
    <>
      <div><svg className='svgImage' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg></div>
      <br /><br />
      <div className="contact-form">
        <div className="form-header text-center">
          <h2>Contact / Report</h2>
        </div>
        <form action='https://formsubmit.co/603e0ed9d44079f34eebfd3e490b2416' method='POST'>
          <div className="row">
            <div className="form-group col-sm-6">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="form-control"
                required=""
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="form-control"
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="number"
              placeholder="Mobile Number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="form-control"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <button className="Cbtn btn-danger" onSubmit={sendMail}>Submit</button>
          </div>
        </form>
      </div>
      {/* <svg className='svgPic' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
    <SvgDown></SvgDown>
    </>
  )
}

export default Contact
