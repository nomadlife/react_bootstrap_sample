import React from 'react';
// import { MDBContainer } from 'mdbreact';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';

const SectionContainer = ({
  children,
  className,
  dark,
  description,
  header,
  noBorder,
  noBottom,
  style,
  title,
  flexCenter,
  flexCenterVert,
  flexColumn
}) => {
  const classes = classNames(
    'section',
    !noBottom && 'mb-5',
    !noBorder ? 'border p-3' : 'px-0',
    dark && 'grey darken-3',
    flexCenter && 'd-flex justify-content-center align-items-center',
    flexCenterVert && 'd-flex align-items-center',
    flexColumn && 'flex-column',
    className
  );

  description = description ? <p>{description}</p> : '';
  title = title ? <h2 className='mb-3'>{title}</h2> : '';
  header = header ? <h4 className='mb-2'>{header}</h4> : '';

  return (
    <>
      {title}
      {header}
      <Container fluid className={classes} style={style}>
        {description}
        {children}
      </Container>
    </>
  );
};

export default SectionContainer;