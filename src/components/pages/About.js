import React from 'react';

export default function About() {
  return (
    // setting inline background image for homepage
    <div className='.text-white'>

      <h1 className="mt-2 ms-3">About Me</h1>
      <div className="ms-3">
        <p>Aspiring web developer enrolled in a full-stack developer course through the University of North Carolina-Charlotte.
        <br />
        I was a former logistics coordinator and have worked in a customer service environment for over 10 years. I will 
        <br />
        leverage my new coding skills with my business acumen to build front and back end apps. 
        <br />
        <br />
        Explore my page to find out more.
        </p>
      </div>
      <div class="column">
        <p>
          <img src="assets/new-pic1.jpg" alt="profilPic" className="mt-3 ms-3"/>
        </p>
      </div>
    </div>
  );
}
