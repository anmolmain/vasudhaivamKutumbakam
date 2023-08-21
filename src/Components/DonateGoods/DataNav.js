import React from 'react'
import { useNavigate } from 'react-router-dom'
const DataNav = () => {
  const navigate = useNavigate();
    return (
    <div>
      <div className="mainPage">
      <div className="container">
        <br />
        <div className="row">
          <div className="col-6 ctr"><button onClick={()=>navigate('/HomePage')} className='btnHomePage'>Donators</button></div>
          <div className="col-1 line">
            <div className="lineInside"></div>
          </div>
          <div className="col-5 ctr"><button onClick={()=>navigate('/PostToDonate')} className='btnHomePage'>Post to donate</button></div>
        </div>
      </div>
      <hr style={{marginLeft:"0px" ,color:"black"}}/>
    </div>
    </div>
  )
}

export default DataNav
