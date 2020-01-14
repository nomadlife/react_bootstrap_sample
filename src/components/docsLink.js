import React from 'react';
// import { MDBRow, MDBIcon } from 'mdbreact';
import { Row } from 'react-bootstrap';

const DocsLink = ({ title, href }) => {
  return (
    <>
      <Row className='align-items-center mt-5'>
        <h4 className='grey-text' style={{ margin: '0px' }}>
          <strong className='font-weight-bold'>{title}</strong>
        </h4>
        <a
          className='border white-text px-2 border-light rounded ml-2 blue-gradient'
          target='_blank'
          href={`${href}/?utm_source=DemoApp&utm_medium=MDBReactPro`}
          rel='noopener noreferrer'
        >
          <i className='mr-2 fas fa-graduation-cap' />
          Docs
        </a>
      </Row>
      <hr className='mb-5' />
    </>
  );
};

export default DocsLink;
