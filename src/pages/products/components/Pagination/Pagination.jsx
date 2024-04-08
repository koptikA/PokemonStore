import React from 'react';
import { Pagination as BPagination } from 'react-bootstrap';
import './Pagination.css';

export const Pagination = ({ currentPage, setActivePage }) => {
  const items = [];

  for (let number = 1; number <= 29; number++) {
    items.push(
      <BPagination.Item
        onClick={() => setActivePage(number)}
        key={number}
        active={number === currentPage} 
      >
        
        {number}
        
      </BPagination.Item>,
    );
  }

  return <BPagination className="pagination-wrapper">{items}</BPagination>;
};
