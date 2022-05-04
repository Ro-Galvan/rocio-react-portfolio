import React from 'react';
import './contact.css';

// put event listener on the email adress input, then create a handle change function which will check the letters that user types - 

export default function Contact() {
  return (
    <>
      <form className="form"> 
      <div className="mb-3">
        <h1>Contact me!</h1>
        <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="name"
        />
      </div>
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          required 
          // only show when handle change function is invalid -style different --state will need to be used 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="messageInput" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="messageInput"
          rows={3}
          defaultValue={""}
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
