import React, { Component } from 'react';

import { Navbar, NavbarBrand, Nav, Tooltip, OverlayTrigger  } from 'react-bootstrap';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';

class App extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <Navbar className='indigo' expand='md' fixed='top'>
            <NavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>React-Bootstrap</strong>
            </NavbarBrand>

            <Navbar.Toggle
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <Navbar.Collapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Item>
                  <Nav.Link
                    exact
                    as={Link} to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/css'
                  >
                    <strong>CSS</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/components'
                  >
                    <strong>Components</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/advanced'
                  >
                    <strong>Advanced</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/navigation'
                  >
                    <strong>Navigation</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/forms'
                  >
                    <strong>Forms</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/tables'
                  >
                    <strong>Tables</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/modals'
                  >
                    <strong>Modals</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    as={Link} to='/addons'
                  >
                    <strong>Addons</strong>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <OverlayTrigger
                    // key={placement}
                    placement='bottom'
                    overlay={
                      <Tooltip>PRO</Tooltip>
                    }
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/products/react-ui-kit/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >

                  <strong>
                        <i class="fas fa-gem"></i>
                        </strong>
                      </a>
                  </OverlayTrigger>
                </Nav.Item>



                <Nav.Item>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={
                      <Tooltip>FREE</Tooltip>
                    }
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/docs/react/getting-started/download/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                      <i class="fas fa-download"></i>
                      </strong>
                    </a>
                  </OverlayTrigger>
                </Nav.Item>


                <Nav.Item className='mr-2'>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip>SUPPORT</Tooltip>}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/support/cat/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                      <i class="fas fa-question-circle"></i>
                      </strong>
                    </a>
                  </OverlayTrigger>
                </Nav.Item>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            <Routes />
          </main>
          <div className='indigo navbar-fixed-bottom'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.MDBootstrap.com'> MDBootstrap.com </a>
            </p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
