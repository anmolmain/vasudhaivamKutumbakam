import React from 'react'
import Main from "./NavBarComponents/Main"
import About from "./NavBarComponents/About"
import Vision from "./NavBarComponents/Vision"
import Working from "./NavBarComponents/Working"
import Contact from "./NavBarComponents/Contact"
import Inputform from "./InputFormsItems/inputForm"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Datanav from './DataNavItems/Datanav'
import Other from "./DataNavItems/Other"
import MainData from "./DataNavItems/MainData"
import Oldage from "./DataNavItems/Oldage"
import Medical from "./DataNavItems/Medical"
import Children from './DataNavItems/Children'
import HomePage from './DonateGoods/HomePage'
import PostToDonate from './DonateGoods/PostToDonate'
import "./header.css"
const Header = () => {
    return (
        <>
            <Router>
                <div className="row">
                    <div className="col-8"> <div className="container">
                        <Link to="/Main" style={{ color: "white", background: "#e4243af6", fontFamily: "cursive",marginTop: "0%",fontSize:"1.8rem",fontWeight:"800" }} className="navbar-brand">Vasudhaiva Kutumbakam</Link></div></div>
                    <div className="col-4" >
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button style={{ margin:"auto" ,backgroundColor:"white", marginLeft:"80%",width:"100%"}}
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarText"
                                aria-controls="navbarText"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"  />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav mr-auto" style={{ background: "#e4243af6" }} >
                                    <li className="liText nav-item active" style={{ marginRight: "20px",display:"flex",float:"left" }}><Link style={{ color: "white",fontSize:'0.9rem' }} className="nav-link" to="/Main">Home</Link></li>
                                    <li className="liText nav-item" style={{ marginRight: "20px",display:"flex",float:"left" }}><Link style={{ color: "white",fontSize:'0.9rem' }} className="nav-link" to="/About">About</Link></li>
                                    <li className="liText nav-item" style={{ marginRight: "20px",display:"flex",float:"left" }}><Link style={{ color: "white",fontSize:'0.9rem' }} className="nav-link" to="/Vision">Vision</Link></li>
                                    <li className="liText nav-item" style={{ marginRight: "20px",display:"flex",float:"left" }}><Link style={{ color: "white",fontSize:'0.9rem' }} className="nav-link" to="/Working">Working</Link></li>
                                    <li className="liText nav-item" style={{ marginRight: "20px",display:"flex",float:"left" }}><Link style={{ color: "white",fontSize:'0.9rem' }} className="nav-link" to="/Contact">Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <Link to="/Datanav"></Link>
                <Link to="/MainData"></Link>
                <Link to="/inputform"></Link>
                <Routes>
                    <Route path='*' element={<Main />} />
                    <Route path='/' element={<Main />} />
                    <Route path='' element={<Main />} />
                    <Route path='/Datanav' element={<Datanav />} />
                    <Route path='/Main' element={<Main />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Vision' element={<Vision />} />
                    <Route path='/Working' element={<Working />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/inputform' element={<Inputform />} />
                    <Route path='/HomePage' element={<HomePage/>} />
                    <Route path='/PostToDonate' element={<PostToDonate/>} />

                    <Route path='/HomePage' element={<HomePage/>} />
                    <Route path='/MainData' element={<MainData />} />
                    <Route path='/Medical' element={<Medical />} />
                    <Route path='/Children' element={ <Children/>} />
                    <Route path='/Oldage' element={<Oldage />} />
                    <Route path='/Other' element={<Other />} />
                </Routes>
            </Router>
        </>
    )
}

export default Header
