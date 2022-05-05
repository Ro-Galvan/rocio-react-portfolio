import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1 className="mt-2 ms-3">Resume</h1>
      <p className="ms-3">
       Check out my resume! Feel free to reach out with any job opportunities!
       <br></br>
       I would also love to hear from you so we can collaborate on new project ideas!
       <br></br>
       <p> What I've learned so far:
          <ul><strong>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Third-Party APIs</li>
            <li>Server-Side APIs</li>
            <li>Bootstrap</li>
            <li>Bootswatch</li>
            <li>Bulma</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL  MySQL2</li>
            <li>Model-View-Controller (MVC)</li>
          </strong></ul>
        </p>
        <a className="ms-3 has-text-grey-dark link-color" href="../assets/developer-resume.pdf" download="resume">Download Resume</a>
      </p>
    </div>
  );
}
