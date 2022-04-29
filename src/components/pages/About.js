import React from 'react';


export default function About() {
  return (
    // setting inline background image for homepage
    <div className='.text-white' style={{
      backgroundImage: `url(assets/about-homepage-background.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      {/* <h1>About Page</h1> */}
      <div className='.text-white inline-block'>
        <p> Aspiring web developer enrolled in a full-stack developer course through the University of North Carolina-Charlotte.</p>
        <p>This is an intensive full-time course where I attend class <em>M-F</em> from 10am-2:30pm.</p>
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
        <p>Please check back to see more of my projects and feel free to reach out with any job opportunities.</p>
      </div>
      <div class="column">
        {/* <p><img src="./assets/images/new-pic.jpg"></p> */}
      </div>
    </div>
  );
}
