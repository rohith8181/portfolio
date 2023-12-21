import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-form">
            <h1 className='Heading'>Contact Me</h1>
            <div className="container">
                <div className="main">
                    <div className="content">
                        <form>
                            <input type="text" name="name" placeholder="Enter Your Name" />

                            <input type="email" name="name" placeholder="Enter Your Email" />
                            <textarea name="message" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn">Send <i className="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                    <div className="form-img">
                        <img src="/Profilepic.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <p className='email-fix'>rohithperala81@gmail.com</p>   
        </div>
    )
}

export default Contact