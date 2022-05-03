import React from 'react';
import './contact.css';

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
