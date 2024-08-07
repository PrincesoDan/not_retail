import React from 'react';
import { Button } from 'react-bootstrap';

const Boton = ({ onClick, text }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default Boton;
