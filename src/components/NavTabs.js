import React from 'react';

// chnage from inline 
const styles = {
  header: {
    backgroundColor: '#60495A',
    
  },
  h1: {
    fontSize: '100px',
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    // d-flex 
    <header className='row header' style={styles.header}> 
      <div className='justify-content-start'>
        <h1>Rocio</h1>
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
    </header>
  );
}

export default NavTabs;
