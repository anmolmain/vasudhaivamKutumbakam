import React from 'react'
import "./Data.css"
import SvgDown from './SvgDown'
import CarasoulNav from './CarasoulNav'

const Cards = ({ post }) => {
    return (
        <div>
            <div><svg className='svgImage' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg></div>
            {
                post.map(post => (
                    <div className='mainDiv'>
                        <h2><b>{post.name}</b></h2>
                        <hr style={{ marginLeft: "0px" }} />
                        <div style={{ width: "50%", height: "30%", marginLeft: "25%" }}><CarasoulNav /></div>
                        <h6><b>Category</b> : {post.category}</h6>
                        <br />
                        <h6><b>Description</b> : {post.problemDescription}</h6>
                        <br />
                        <h6><b>Any other details</b> : {post.anyotherdetails}</h6>
                        <br />
                        <h6><b>Found at </b>: {post.foundWHere}</h6>
                        <hr style={{ marginLeft: "0px" }} />
                        <h6><b>Link to original post : </b><a href={post.linkToOriginalPost} target="_blank" style={{ color: "navy" }}><b>{post.linkToOriginalPost}</b></a></h6>
                        <hr style={{ marginLeft: "0px" }} />
                        <h6><b>Contact Number (Reciever's)</b> : {post.contactNumber}</h6>
                        <h6><b>Contact Number (who posted this ad)</b> : {post.adhaar}</h6>
                        <h6><b>Last Date</b> : {post.lastDate}</h6>                        <hr style={{ marginLeft: "0px" }} />
                        <a href={post.linkToOriginalPost} target="_blank" rel="noreferrer"><input type="button" value="More detials" className='formButton' /></a>
                    </div>
                ))}
            <SvgDown></SvgDown>
            {/* <svg className='svgPicData' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
        </div>
    )
}

export default Cards
