import React from 'react';

import { Container, Row, Col, Jumbotron, Card, Fade, Button, Nav, Link, Image } from 'react-bootstrap';

import './HomePage.css';
import { logDOM } from '@testing-library/react';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <div className='sectionPage' />
        <div className='mt-3 mb-5'>
          <div>
            <Row>
              <Col
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <Card.Body className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      <img
                        // src='https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png'
                        src='https://raw.githubusercontent.com/react-bootstrap/react-bootstrap/master/www/static/logo.svg'
                        alt='logo,'
                        className='pr-2'
                      />
                      Demo App
                    </strong>
                  </h2>
                  <Row />
                  <p>React Bootstrap</p>
                  <p className='pb-4'>
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <Row className='d-flex flex-row justify-content-center row'>
                    <a
                      className='border nav-link border-light rounded mr-1 mx-2 mb-2'
                      href='https://mdbootstrap.com/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-graduation-cap mr-2' />
                      <span className='font-weight-bold'>
                        Official Documentation
                      </span>
                    </a>
                    <a
                      className='border nav-link border-light rounded mx-2 mb-2'
                      href='https://mdbootstrap.com/products/react-ui-kit/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i far className='fas fa-gem mr-2' />
                      <span className='font-weight-bold'>PRO</span>
                    </a>
                    <a
                      className='border nav-link border-light rounded mx-2 mb-2'
                      href='https://mdbootstrap.com/docs/react/getting-started/download/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fas fa-download mr-2' />
                      <span className='font-weight-bold'>FREE</span>
                    </a>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </div>


          <Container>
            <Row>
              <Col md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className='text-center text-muted mb-1'>
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className='text-center text-muted'>
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className='my-5' />

                <Row id='categories'>
                  <Col md='4'>
                    <Fade in>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i className='fab fa-css3 pink-text pr-2' />
                            <strong>CSS</strong>
                          </Card.Title>
                          <Card.Text>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </Card.Text>
                          <Nav.Link
                            tag='button'
                            to='/css'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md='4'>
                    <Fade in reveal type='fadeInDown'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i icon='cubes' className='blue-text pr-2' />
                            <strong>COMPONENTS</strong>
                          </Card.Title>
                          <Card.Text>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </Card.Text>
                          <Nav.Link
                            tag='button'
                            to='/components'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md='4'>
                    <Fade in reveal type='fadeInRight'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i icon='code' className='green-text pr-2' />
                            <strong>ADVANCED</strong>
                          </Card.Title>
                          <Card.Text>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </Card.Text>

                          <Nav.Link
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                </Row>

                <Row id='categories'>
                  <Col md='4'>
                    <Fade in reveal type='fadeInLeft'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i icon='bars' className='pink-text pr-2' />
                            <strong>NAVIGATION</strong>
                          </Card.Title>
                          <Card.Text>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </Card.Text>

                          <Nav.Link
                            tag='button'
                            to='/navigation'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md='4'>
                    <Fade in reveal type='fadeIn'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i icon='edit' className='blue-text pr-2' />
                            <strong>FORMS</strong>
                          </Card.Title>
                          <Card.Text className='mb-4 pb-3'>
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </Card.Text>

                          <Nav.Link
                            tag='button'
                            to='/forms'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md='4'>
                    <Fade in reveal type='fadeInRight'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i icon='table' className='green-text pr-2' />
                            <strong>TABLES</strong>
                          </Card.Title>
                          <Card.Text>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </Card.Text>

                          <Nav.Link
                            tag='button'
                            to='/tables'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                </Row>

                <Row id='categories'>
                  <Col md='4'>
                    <Fade in reveal type='fadeInLeft'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>MODALS</strong>
                          </Card.Title>
                          <Card.Text>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </Card.Text>

                          <Nav.Link
                            tag='button'
                            to='/modals'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md='4'>
                    <Fade in reveal type='fadeInUp'>
                      <Card cascade className='my-3 grey lighten-4'>
                        <Card.Img
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                        />
                        <Card.Body cascade className='text-center'>
                          <Card.Title>
                            <i
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </Card.Title>
                          <Card.Text>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </Card.Text>

                          <Nav.Link
                            tag='button'
                            to='/addons'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </Nav.Link>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </Col>
                  
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default HomePage;
