import React from 'react';
import "./Datanav.css"
import { useNavigate } from 'react-router-dom';
const Datanav = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container">
            <hr style={{marginLeft:"0px"}}/>
                <div className='wrapper'>
                    <button className='NavBtn' onClick={() => navigate('/MainData')}>Education</button>
                    <button className='NavBtn' onClick={() => navigate('/Children')}>Children</button>
                    <button className='NavBtn' onClick={() => navigate('/oldage')}>Old_Age</button>
                    <button className='NavBtn' onClick={() => navigate('/Medical')}>Medical</button>
                    <button className='NavBtn' onClick={() => navigate('/Other')}>Other</button>
                    <button className='NavBtn' onClick={() => navigate('/Working')}>Working</button>
                    <button className='NavBtn' onClick={() => navigate('/InputForm')}>Post</button>
                    <button className='NavBtn' onClick={() => navigate('/Main')}>Home</button> 
                </div>
                <hr style={{marginLeft:"0px"}}/>
            </div>
        </div>
    )
}

export default Datanav
