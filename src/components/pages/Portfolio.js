import React from 'react';

export default function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {/* Project 1-cosmic dust */}
    <div className="col">
      <div className="card">
        <img src="assets/group-project-cosmic-dust.jpg" className="card-img-top" alt="Group Project: Cosmic Dust" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    {/* Project 2 -nifty-notetaker */}
    <div className="col">
      <div className="card">
        <img src="assets/nifty-notetaker.jpg" className="card-img-top" alt="nifty-notetaker" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            {/* https://github.com/Ro-Galvan/nifty-notetaker */}
            {/* https://morning-wildwood-40959.herokuapp.com/ */}
          </p>
        </div>
      </div>
    </div>
    {/* Project 3 -portfolio*/}
    <div className="col">
      <div className="card">
        <img src="assets/" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in
            to additional content.
            {/* https://github.com/Ro-Galvan/portfolio */}
            {/* https://ro-galvan.github.io/portfolio/ */}
          </p>
        </div>
      </div>
    </div>
    {/* Project 4---Housable */}
    <div className="col">
      <div className="card">
        <img src="assets/" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    {/* project 5-a-penny-for-your-thoughts
 */}
    <div className="col">
      <div className="card">
        <img src="assets/" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
        {/* project 6 -regex-or-hieroglyphics-tutorial */}
        <div className="col">
      <div className="card">
        <img src="assets/" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            {/* https://gist.github.com/Ro-Galvan */}
            {/* https://gist.github.com/Ro-Galvan/8796e2cb0941ac1ef8b5f77f5a35ea2b */}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}
