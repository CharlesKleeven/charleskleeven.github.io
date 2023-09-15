import React from 'react';
import './Contact.css';

function Contact() {
    return (
    <div className="contact-container">
        <div className="header-container">
            <h2>Contact me</h2>
            <div className="header-message">
                <p> If you are interested in working with me or just have questions and comments,
                    feel free to fill out the form below.</p>
                <p> Alternatively, you can reach me through my email at
                xxxxx@gmail.com.</p>
            </div>
        </div>

        <form className="form-container">
            <div className="name-group">
                <div className="form-group">
                    <label htmlFor="firstName">First name<span className="required-label">*</span></label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email<span className="required-label">*</span></label>
                <input type="text" id="email" name="email" required />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject<span className="required-label">*</span></label>
                <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message<span className="required-label">*</span></label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit">Send</button>
        </form>
    </div>
    );
}

export default Contact;
