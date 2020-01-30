import React from 'react';
// import { MDBIcon, MDBNavLink } from 'mdbreact';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavLink = ({ to, title }) => {
  return (
    <Nav.Link as={Link} className='list-group-item list-group-item-action' to={to} >
      <h5 style={{ margin: '0' }} className='justify-content-between d-flex align-items-center'>
        {title}
        {/* <MDBIcon icon='angle-right' /> */}
        <i className="fas fa-angle-right"></i>
      </h5>
    </Nav.Link>
  );
};

export default NavLink;
