import React from 'react';

// import {
//   MDBJumbotron,
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCardTitle,
//   MDBIcon,
//   MDBNavLink,
//   MDBNav,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardText
// } from 'mdbreact';

import { Container, Row, Col, Jumbotron, Card, Button, Nav, Link } from 'react-bootstrap';

import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const JumbotronPage = () => {
  return (
    <>
      <Container className='mt-5'>
        <DocsLink
          title='Jumbotron'
          href='https://mdbootstrap.com/docs/react/components/jumbotron/'
        />
        <Row>
          <Col>
            <SectionContainer noBorder header='Basic example'>
              <Jumbotron className='text-center'>
                <h2 className='h1 display-3'>Hello, world!</h2>
                <p className='lead'>
                  This is a simple hero unit, a simple Jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <hr className='my-2' />
                <p>
                  It uses utility classes for typgraphy and spacing to space
                  content out within the larger container.
                </p>
                <p className='lead'>
                  <Button variant='primary'>Learn More</Button>
                </p>
              </Jumbotron>
            </SectionContainer>
          </Col>
        </Row>
      </Container>

      <hr />

      <h4 className='title mt-5 mb-4 container text-left'>Fluid jumbotron</h4>
      <Jumbotron fluid>
        <Container>
          <h2 className='display-4'>Fluid jumbotron</h2>
          <p className='lead'>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

      <hr />

      <Container className='mt-5'>
        <Row>
          <Col>
            <SectionContainer
              noBorder
              header='Jumbotron with a background image'
            >
              <Jumbotron style={{ padding: 0 }}>
                <Col
                  className='text-white text-center py-5 px-4'
                  style={{
                    backgroundImage:
                      'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'
                  }}
                >
                  <Col className='py-5'>
                    <div className='h1-responsive pt-3 m-5 font-bold'>
                      Create your beautiful website with MDBootstrap
                    </div>
                    <p className='mx-5 mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <Button variant="danger">
                      <i class="far fa-copy mr-2"></i> View project
                    </Button>
                  </Col>
                </Col>
              </Jumbotron>
            </SectionContainer>
          </Col>
        </Row>

        <hr />

        <Row className='mt-5'>
          <Col>
            <SectionContainer noBorder header='Jumbotron with image'>
              <Jumbotron className='text-center'>
                <Card>
                  <Card.Title className='card-title h4 pb-2'>
                    <strong>My adventure</strong>
                  </Card.Title>
                  <Card.Img
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                    className='img-fluid'
                  />

                </Card>
                <Card.Body>
                  <Card.Title className='indigo-text h5 m-4'>
                    Photography
                  </Card.Title>
                  <Card.Text>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </Card.Text>

                  <Nav className='justify-content-center'>
                    <Nav.Link to='#!'>
                      <i
                        className='fab fa-linkedin-in'
                      />
                    </Nav.Link>
                    <Nav.Link to='#!'>
                      <i className='fab fa-twitter ' />
                    </Nav.Link>
                    <Nav.Link to='#!'>
                      <i className='fab fa-facebook-f' />
                    </Nav.Link>
                  </Nav>
                </Card.Body>
              </Jumbotron>
            </SectionContainer>
          </Col>
        </Row>

        <hr />

        <Row className='mt-5'>
          <Col>
            <SectionContainer noBorder header='Jumbotron with buttons'>
              <Jumbotron>
                <Card>
                  <Card.Body>
                    <Card.Title className='h2'>
                      Material Design for Bootstrap
                    </Card.Title>
                    <p className='blue-text my-4 font-weight-bold'>
                      Powerful and free Material Design UI KIT
                    </p>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga aliquid dolorem ea distinctio exercitationem delectus
                      qui, quas eum architecto, amet quasi accusantium, fugit
                      consequatur ducimus obcaecati numquam molestias hic itaque
                      accusantium doloremque laudantium, totam rem aperiam.
                    </Card.Text>
                    <hr className='my-4' />
                    <div className='pt-2'>
                      <Button variant='primary' className='waves-effect'>
                        Buy now <i className='fas fa-gem' />
                      </Button>
                      <Button variant='outline' className='waves-effect'>
                        Download <i className='fas fa-download' />
                      </Button>
                    </div>
                  </Card.Body>

                </Card>
              </Jumbotron>
            </SectionContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JumbotronPage;
