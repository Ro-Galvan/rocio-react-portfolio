import React from 'react';

export default function About() {
  return (
    // setting inline background image for homepage
    <div className='.text-white'>

      <h1 className="mt-2 ms-3">About Me</h1>
      <div className="ms-3">
        <h4>Aspiring web developer enrolled in a full-stack developer course through the University of North Carolina-Charlotte.
        <br />
        <br />
        Explore my page to find out more.
        </h4>
      </div>
      <div class="column">
        <p>
          <img src="assets/new-pic1.jpg" alt="profilPic" className="mt-3 ms-3"/>
        </p>
      </div>
    </div>
  );
}
