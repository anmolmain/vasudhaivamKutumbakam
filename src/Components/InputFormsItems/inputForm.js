import React from 'react'
import './inputForm.css'
import { useState } from 'react'
import SvgDown from '../DataNavItems/SvgDown';
const InputForm = () => {
  const [user, setUser] = useState({
    name: "",
    category: "",
    problemDescription: "",
    contactNumber: "",
    anyotherdetails: "",
    lastDate: "",
    foundWHere: "",
    linkToOriginalPost: "",
    adhaar: ""
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, category, problemDescription, contactNumber, anyotherdetails, lastDate, foundWHere, linkToOriginalPost, adhaar } = user;
    if (contactNumber == "") {
      contactNumber = "Not Mentioned";
    }
    else if (lastDate == "") {
      lastDate = "Not Mentioned";
    }
    else if (adhaar == "") {
      adhaar = "Not Mentioned";
    }

    if (name && category && problemDescription && anyotherdetails && foundWHere && linkToOriginalPost) {
      var fetchRequest;
      switch (category) {

        case "education":
          console.log(name, category, problemDescription, contactNumber, anyotherdetails, lastDate, foundWHere, linkToOriginalPost, adhaar);
          fetchRequest = "https://ngowebsite-a4036-default-rtdb.firebaseio.com/education.json"
          break;
        case "children":
          console.log(name, category, problemDescription, contactNumber, anyotherdetails, lastDate, foundWHere, linkToOriginalPost, adhaar);
          fetchRequest = "https://ngowebsite-a4036-default-rtdb.firebaseio.com/children.json"
          break;
        case "medical":
          console.log(name, category, problemDescription, contactNumber, anyotherdetails, lastDate, foundWHere, linkToOriginalPost, adhaar);
          fetchRequest = "https://ngowebsite-a4036-default-rtdb.firebaseio.com/medical.json"
          break;
        case "oldage":
          console.log(name, category, problemDescription, contactNumber, anyotherdetails, lastDate, foundWHere, linkToOriginalPost, adhaar);
          fetchRequest = "https://ngowebsite-a4036-default-rtdb.firebaseio.com/oldage.json"
          break;
        default:
          console.log(name, category, problemDescription, contactNumber, anyotherdetails, lastDate, foundWHere, linkToOriginalPost, adhaar);
          fetchRequest = "https://ngowebsite-a4036-default-rtdb.firebaseio.com/other.json"
          break;
      }
      const res = await fetch(
        fetchRequest,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            category,
            problemDescription,
            contactNumber,
            anyotherdetails,
            lastDate,
            foundWHere,
            linkToOriginalPost,
            adhaar
          })
        });
      if (res) {
        setUser({
          name: "",
          category: "",
          problemDescription: "",
          contactNumber: "",
          anyotherdetails: "",
          lastDate: "",
          foundWHere: "",
          linkToOriginalPost: "",
          adhaar: ""
        })
        alert("Data Submitted Successfully");
      }
    }
    else {
      alert("Please Fill all the fields")

    }

  };

  return (
    <div>
      <svg className='svgImage' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcbbc1b2" fill-opacity="1" d="M0,32L30,32C60,32,120,32,180,37.3C240,43,300,53,360,74.7C420,96,480,128,540,128C600,128,660,96,720,80C780,64,840,64,900,80C960,96,1020,128,1080,160C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      <br /><p style={{ fontSize: '2rem', fontWeight: '900', textAlign: "center", fontFamily: "Lora" }}>A small help can be a Big change</p>
      <hr style={{ marginLeft: "0px" }} />
      <div id="centered">
        <form action="#" method="POST" name="form_for_treehouse_contest">
          Name / Title : <input type="text" name="name" placeholder="Name /title" value={user.name}
            onChange={getUserData} />
          <br /><br />
          Choose a category <span></span>
          <>
            <label htmlFor="category"> : </label>
            <select className='browser-default custom-select' name="category" id="category" value={user.category}
              onChange={getUserData}>
              <option >Choose Category </option>
              <option value="education">Education</option>
              <option value="children">Children</option>
              <option value="medical">Medical</option>
              <option value="oldage">Old Age</option>
              <option value="other">other</option>
            </select>
          </> <br />
          <br />
          Description :
          <textarea
            name="problemDescription"
            rows={8}
            placeholder="Description"
            value={user.problemDescription}
            onChange={getUserData}
            defaultValue={""}

          />
          Contact Number / Any other contact detail  : <input type="text" name="contactNumber" placeholder="ContactNumber" value={user.contactNumber}
            onChange={getUserData} />
          <br />
          Any other details :
          <textarea
            name="anyotherdetails"
            rows={8}
            placeholder="Any other details"
            defaultValue={""}
            value={user.anyotherdetails}
            onChange={getUserData}
          />
          Last date (optional) : <input type="text" name="lastDate" placeholder="Please type 'Not Mentioned' if you don't enter anything" value={user.lastDate}
            onChange={getUserData} />
          <br />
          Where you found this (site / platform name) :
          <input type="text" name="foundWHere" placeholder="Where you found this" value={user.foundWHere}
            onChange={getUserData} />
          <br />
          Original Post Link :
          <input type="text" name="linkToOriginalPost" placeholder="link to original post" value={user.linkToOriginalPost}
            onChange={getUserData} />
          Your Contact detail (optional) :
          <input type="text" name="adhaar" placeholder="Please type 'Not Mentioned' if you don't enter anything" value={user.adhaar}
            onChange={getUserData} />
          <br /><br />
          <button className='btnS' onClick={postData}> Submit all Details</button>
        </form>
      </div>
      <SvgDown />
    </div>
  )
}

export default InputForm
