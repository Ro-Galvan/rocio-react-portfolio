import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    // d-flex 
    <header className='d-flex row header'>
      <div className='center-block justify-content-start'>
        <div>
          <h1 className="ms-3">Rocio Galvan</h1>
        </div>
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
