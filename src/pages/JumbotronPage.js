import React from 'react';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBNavLink,
  MDBNav,
  MDBCardImage,
  MDBCardBody,
  MDBCardText
} from 'mdbreact';

import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

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
                  <MDBBtn color='primary'>Learn More</MDBBtn>
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
                    <MDBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                      Create your beautiful website with MDBootstrap
                    </MDBCardTitle>
                    <p className='mx-5 mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <MDBBtn outline color='white' className='mb-5'>
                      <MDBIcon icon='clone' className='mr-2' /> View project
                    </MDBBtn>
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
                <MDBCardTitle className='card-title h4 pb-2'>
                  <strong>My adventure</strong>
                </MDBCardTitle>
                <MDBCardImage
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'
                  className='img-fluid'
                />
                <MDBCardBody>
                  <MDBCardTitle className='indigo-text h5 m-4'>
                    Photography
                  </MDBCardTitle>
                  <MDBCardText>
                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </MDBCardText>

                  <MDBNav className='justify-content-center'>
                    <MDBNavLink to='#!'>
                      <MDBIcon
                        fab
                        icon='linkedin-in'
                        className='grey-text'
                        size='lg'
                      />
                    </MDBNavLink>
                    <MDBNavLink to='#!'>
                      <MDBIcon
                        fab
                        icon='twitter'
                        className='grey-text'
                        size='lg'
                      />
                    </MDBNavLink>
                    <MDBNavLink to='#!'>
                      <MDBIcon
                        fab
                        icon='facebook-f'
                        className='grey-text'
                        size='lg'
                      />
                    </MDBNavLink>
                  </MDBNav>
                </MDBCardBody>
              </Jumbotron>
            </SectionContainer>
          </Col>
        </Row>

        <hr />

        <Row className='mt-5'>
          <Col>
            <SectionContainer noBorder header='Jumbotron with buttons'>
              <Jumbotron>
                <MDBCardBody>
                  <MDBCardTitle className='h2'>
                    Material Design for Bootstrap
                  </MDBCardTitle>
                  <p className='blue-text my-4 font-weight-bold'>
                    Powerful and free Material Design UI KIT
                  </p>
                  <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga aliquid dolorem ea distinctio exercitationem delectus
                    qui, quas eum architecto, amet quasi accusantium, fugit
                    consequatur ducimus obcaecati numquam molestias hic itaque
                    accusantium doloremque laudantium, totam rem aperiam.
                  </MDBCardText>
                  <hr className='my-4' />
                  <div className='pt-2'>
                    <MDBBtn color='primary' className='waves-effect'>
                      Buy now <MDBIcon far icon='gem' />
                    </MDBBtn>
                    <MDBBtn outline color='primary' className='waves-effect'>
                      Download <MDBIcon icon='download' />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </Jumbotron>
            </SectionContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JumbotronPage;
