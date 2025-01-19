import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product:{title,price,thumbnail}}) {
  return <>
    <Card style={{ width: '15rem', margin:"10px" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>$ {price}</Card.Title>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  </>
}

export default ProductCard