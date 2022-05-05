import React from 'react';
// import { init } from 'ityped';

export default function About() {
  return (
    // setting inline background image for homepage
    <div className='.text-white'>

      <h1>Hello Friends</h1>
      <div className='.text-white inline-block'>
        <h3>Aspiring web developer enrolled in a full-stack developer course through the University of North Carolina-Charlotte.
        </h3>
      </div>
      <div class="column">
        <p>
          <img src="assets/new-pic.jpg" className="card-img-top" alt="profilPic"/>
        </p>
      </div>
    </div>
  );
}
