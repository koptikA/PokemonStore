import React from 'react';
import './Product.css';
import { Col, Card } from 'react-bootstrap';
import { ROUTE_NAMES } from '../../../../routes/routeNames';
import { Link } from 'react-router-dom';
import { CartButton } from '../../../../components/CartButton/CartButton';

export const Product = ({ product }) => {
  const { id, name, price, image, stats } = product;

  return (
    <Col className="mb-5 col-md-6 col-lg-3 col-6">
      <Link className="product-link" to={`${ROUTE_NAMES.PRODUCTS}/${id}`}>
        <Card className="product">
          <div className="product-image">
            <Card.Img variant="top" src={image} />
          </div>

          <Card.Body>
            <Card.Title className="product-title">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">$ {price}</Card.Subtitle>

            <div className="product-stats">
              {stats.map((stat) => {
                return (
                  <div key={stat.title} className="product-stat">
                    <div className="product-stat-title">{stat.title}</div>
                    <div className="product-stat-value">{stat.value}</div>
                  </div>
                );
              })}
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <CartButton id={id} image={image} name={name} price={price} />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
