import React from 'react';
import './ProductInfoAbilities.css';
import { Accordion } from 'react-bootstrap';

export const ProductInfoAbilities = ({ abilities }) => {
  return (
    <Accordion>
      {abilities.map((ability) => {
        return (
          <Accordion.Item key={ability.title} eventKey={ability.title}>
            <Accordion.Header>{ability.title}</Accordion.Header>
            <Accordion.Body>{ability.description}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
