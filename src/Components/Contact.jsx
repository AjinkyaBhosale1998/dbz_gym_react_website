import React, { useState } from "react"; 

function Contact() {
const [ user , setUser] = useState({
    name:"",
    email:"",
    message:""
});

let name, value;
const getUserData = ( event ) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
};

const postData = async (e) => {
    e.preventDefault();
    const { name, email, message } = user;

    const res = await fetch(
        "https://react-dbz-gym-website-default-rtdb.firebaseio.com/DBZ-GYM.json"
        ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message
            }),
        }
    );
};

    return (
      <div id="contact">
        <form id="contact-form" method="POST">
          <h1>
            <span style={{ color: "orange" }}> Contact </span> Us
          </h1>
          <input
            type="text"
            placeholder="Full Name ..."
            required
            name="name"
            value={user.name}
            onChange={getUserData}
          />
          <input
            type="text"
            placeholder="Type Your E-mail here ..."
            required
            name="email"
            value={user.email}
            onChange={getUserData}
          />
          <textarea
            placeholder="Write a message here ..."
            name="message"
            value={user.message}
            onChange={getUserData}
          ></textarea>
          <input type="button" type="submit" value="Send" onClick={postData} />
        </form>
      </div>
    );
}

export default Contact;
