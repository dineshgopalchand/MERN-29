import React, { useRef } from "react";

const ContactForm = () => {
    const fullNameRef=useRef();
    const emailRef=useRef();
    const subjectRef=useRef();
    const detailsRef=useRef();
    const contactFormHandler = (event)=>{
        event.preventDefault();
        const fullnameVal=fullNameRef.current.value;
        const emailVal=emailRef.current.value;
        const subjectVal=subjectRef.current.value;
        const detailVal=detailsRef.current.value;
        if(fullnameVal.length<3){
            return fullNameRef.current.focus();
        }
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal)){
            return emailRef.current.focus();
        }

        // fullNameRef.current.focus();
    }
  return (
    <>
      <div className="container">
        <h3>Contact Form</h3>
        <form  onSubmit={contactFormHandler}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              placeholder="Full name"
              ref={fullNameRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Subject"
              ref={subjectRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Details</label>
            <textarea
              className="form-control"
              id="details"
              name="details"
              placeholder="Add some detail"
              ref={detailsRef}
            ></textarea>
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-primary form-control">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
