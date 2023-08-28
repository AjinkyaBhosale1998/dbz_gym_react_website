import React from "react";

function Contact () {
    return (
        <div id="contact">
            <h1>Contact US</h1>
            <input type='text' placeholder='Full Name' required/>
            <input type='text' placeholder='Type Your E-Mail' required/>
            <textarea placeholder='Write here ...' name='message'></textarea>
            <input type='submit' value='Send'/> 
        </div>

    );
}

export default Contact;