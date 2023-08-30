import React from "react";

function Contact() {
    return (
        <div id="contact">
            <h1>
                <span style={{ color: 'orange' }}> Contact </span> Us
            </h1>
            <form id="contact-form">
                <input type='text' placeholder='Full Name' required />
                <input type='text' placeholder='Type Your E-Mail' required />
                <textarea placeholder='Write here ...' name='message'></textarea>
                <input type='submit' value='Send' />
            </form>
        </div>
    );
}

export default Contact;
