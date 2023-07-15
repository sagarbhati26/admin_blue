import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  useEffect(() => {
    // Initialize Bootstrap's dropdown functionality
    const dropdownToggleElements = document.querySelectorAll('.dropdown-toggle');
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget?.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement && targetElement.classList.contains('show')) {
        targetElement.classList.remove('show');
      } else if (targetElement) {
        targetElement.classList.add('show');
      }
    };

    dropdownToggleElements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });

    return () => {
      dropdownToggleElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div>
      <nav id="sidebar" className="bg-dark">
        <div className="sidebar-header">
          <h3 className="text-light">
            <img src="img/logo.png" className="img-fluid" alt="Logo" />
            <span>Vishweb design</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <Link to="/" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </Link>
          </li>

          <div className="small-screen navbar-display">
            {/* Other menu items */}
          </div>

          <li>
            <Link to="/Cource" className="text-light">
              <i className="material-icons">library_books</i>
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/Reports" className="text-light">
              <i className="material-icons">library_books</i>
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="text-light">
              <i className="material-icons">library_books</i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
