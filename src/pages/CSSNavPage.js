import React from 'react';

import { Container, Row, Col, Jumbotron, Fade } from 'react-bootstrap';

import MenuLink from '../components/menuLink';

const CSSPage = () => {
  return (
    <>
    <div color='indigo darken-3' className='sectionPage' />
      <Fade in type='zoomIn' duration='500ms'>
        <Container>
          <Row>
            <Col md='8' className='mx-auto'>
                <Jumbotron className='mt-3'>
                  <h1 className='text-center'>
                    {/* <MDBIcon icon='css3' brand className='indigo-text mr-w' /> */}
                      {/* <i className="fab fa-css3" style={{color: "indigo"}}></i> */}
                      <i className="fab fa-css3 indigo-text mr-w" ></i>
                    CSS
                  </h1>
                  <ul className='list-unstyled example-components-list'>
                    <h6 className='mt-3 grey-text'><strong>FREE</strong></h6>
                    <MenuLink to='/css/animations' title='Animation' />
                    <MenuLink to='/css/hover' title='Hover effects' />
                    <MenuLink to='/css/icons' title='Icons' />
                    <MenuLink to='/css/jumbotron' title='Jumbotron' />
                    <MenuLink to='/css/masks' title='Masks' />
                    <MenuLink to='/css/masonry' title='Masonry Layout' />
                  </ul>
                </Jumbotron>
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
};

export default CSSPage;
