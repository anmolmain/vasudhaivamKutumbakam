import './HomePage.css'
import DataNav from './DataNav'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import convertToAOO from '../DataNavItems/DataFetching'
import Preloader from '../../Preloader/Preloader'
import SvgDown from '../DataNavItems/SvgDown'

const HomePage = () => {
  const [post, SetPost] = useState([])
  const [preNav, setPreNav] = useState(true);
  useEffect(() => {

    axios.get("https://ngowebsite-a4036-default-rtdb.firebaseio.com/DonateSomeOne.json")
      .then(res => {
        console.log(convertToAOO(res.data));
        SetPost(convertToAOO(res.data))
        setPreNav(false);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <DataNav />
      {preNav && <div>{<Preloader />}</div>}
      {
        post.map(post => (
          <div className='mainDiv'>
            <div className="row">
              <div className="col-12">
                <h2><b>{post.name}</b></h2>
                <hr style={{ marginLeft: "0px" }} />
                <h6><b>Description</b> : {post.problemDescription}</h6>
                <br />
                <h6><b>Any other details</b> : {post.anyotherdetails}</h6>
                <br />
                <hr style={{ marginLeft: "0px" }} />
                <h6><b>Contact Number</b> : {post.contactNumber}</h6>
              </div>
            </div>
          </div>
        ))}
        <SvgDown />
    </>
  )
}

export default HomePage
