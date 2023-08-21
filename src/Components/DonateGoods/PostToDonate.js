import React from 'react'
import DataNav from './DataNav'
import { useState } from 'react';
import SvgDown from '../DataNavItems/SvgDown';

const PostToDonate = () => {
  const [user, setUser] = useState({
    name: "",
    problemDescription: "",
    contactNumber: "",
    anyotherdetails: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, problemDescription, contactNumber, anyotherdetails } = user;
    var fetchRequest;
    fetchRequest = "https://ngowebsite-a4036-default-rtdb.firebaseio.com/DonateSomeOne.json"
    const res = await fetch(
      fetchRequest,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          problemDescription,
          contactNumber,
          anyotherdetails,
      })
      });
    if (res) {
      setUser({
        name: "",
        problemDescription: "",
        contactNumber: "",
        anyotherdetails: "",
      })
      alert("Data Submitted Successfully");
    }
    else {
  alert("Please Fill all the fields")

}

  };
return (
  <div>
    <DataNav />
    <div>
      <hr style={{ marginLeft: "0px" }} />
      <div id="centered">
        <form action="#" method="POST" name="form_for_treehouse_contest">
          Title : <input type="text" name="name" placeholder="Name /title" value={user.name}
            onChange={getUserData} /> <br />
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
          Any other details (Address):
          <textarea
            name="anyotherdetails"
            rows={8}
            placeholder="Your address , so that reciever may recieve the product from you"
            defaultValue={""}
            value={user.anyotherdetails}
            onChange={getUserData}
          />
          <button className='btnS' onClick={postData}> Submit all Details</button>
        </form>
      </div>
    </div>
    <SvgDown/>
  </div>
)
}

export default PostToDonate
