import React from 'react';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {/* Project 1-cosmic dust */}
      <div className="col projectCard">
        <div className="card">
          <a href="https://magdalenaperry.github.io/nasa-space-things/" target="_blank" rel="noopener noreferrer">
            <img src="assets/group-project-cosmic-dust.jpg" className="card-img-top" alt="Group Project: Cosmic Dust" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Cosmic Dust</h5>
            <p className="card-text">
              Collaborated using HTML, CSS, JavaScript, Bootstrap and Bootswatch Libraries
            </p>
            <a href="https://github.com/magdalenaperry/nasa-space-things" class="subtitle is-7" target="_blank" rel="noopener noreferrer">Checkout the Github repo</a>
          </div>
        </div>
      </div>
      {/* Project 2 -nifty-notetaker */}
      <div className="col">
        <div className="card">
          <a href="https://morning-wildwood-40959.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="assets/nifty-notetaker.jpg" className="card-img-top" alt="nifty-notetaker" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Nifty Notetaker</h5>
            <p className="card-text">
              HTML, CSS, JavaScript
            </p>
            <a href="https://github.com/Ro-Galvan/nifty-notetaker" class="subtitle is-7" target="_blank" rel="noopener noreferrer">Checkout the Github repo</a>
          </div>
        </div>
      </div>
      {/* Project 3 -portfolio*/}
      <div className="col">
        <div className="card">
          <a href="https://ro-galvan.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
            <img src="assets/refactored-portfolio.jpg" className="card-img-top" alt="Refactored Portfolio" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Refactored Portfolio</h5>
            <p className="card-text">
              HTML, CSS, JavaScript, Bulma
            </p>
            <a href="https://github.com/Ro-Galvan/portfolio" class="subtitle is-7" target="_blank" rel="noopener noreferrer">Checkout the Github repo</a>
          </div>
        </div>
      </div>
      {/* Project 4---Housable */}
      <div className="col">
        <div className="card">
          <a href="https://hidden-earth-95543.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="assets/housable.png" className="card-img-top" alt="Housable Group Project" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Housable</h5>
            <p className="card-text">
              Collaborated using Handlebars, CSS, JavaScript
            </p>
            <a href="https://github.com/devonfaria/housable" class="subtitle is-7" target="_blank" rel="noopener noreferrer">Checkout the Github repo</a>
          </div>
        </div>
      </div>
      {/* project 5-a-penny-for-your-thoughts
 */}
      <div className="col">
        <div className="card">
          <a href="https://drive.google.com/file/d/1Dt3W-V7QseLCvClvXCA0cNiS7SSBU7fE/view" target="_blank" rel="noopener noreferrer">
            <img src="assets/insomnia-overview.png" className="card-img-top" alt="A Penny For Your Thoughts" />
          </a>
          <div className="card-body">
            <h5 className="card-title">A Penny For Your Thoughts</h5>
            <p className="card-text">
              JavaScript, Insomnia, Mongo, mongoDB, MongoDb Compass
            </p>
            <a href="https://github.com/Ro-Galvan/a-penny-for-your-thoughts" class="subtitle is-7" target="_blank" rel="noopener noreferrer">Checkout the Github repo</a>
            <br />
            <a href="https://drive.google.com/file/d/1ghLnfwvTgpq7sBk-yB4z4s2z_RSu3oAy/view" class="subtitle is-7" target="_blank" rel="noopener noreferrer"> for part 2 of the video click here</a>
          </div>
        </div>
      </div>
      {/* project 6 -regex-or-hieroglyphics-tutorial */}
      <div className="col">
        <div className="card">
          <a href="https://gist.github.com/Ro-Galvan/8796e2cb0941ac1ef8b5f77f5a35ea2b" target="_blank" rel="noopener noreferrer">
            <img src="assets/regex-tutorial.jpg" className="card-img-top" alt="Regex Tutorial" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Regex Tutorial</h5>
            <p className="card-text">
              Gist tutorial on a regular expression breakdown
            </p>
            <a href="https://gist.github.com/Ro-Galvan " class="subtitle is-7" target="_blank" rel="noopener noreferrer">Checkout the Github repo</a>
          </div>
        </div>
      </div>
    </div>

  );
}
