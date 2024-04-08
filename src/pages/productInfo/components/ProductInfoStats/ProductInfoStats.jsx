import React from 'react';
import './ProductInfoStats.css';

export const ProductInfoStats = ({ stats }) => {
  return (
    <div className={'product-info-stats'}>
      {stats.map((stat) => {
        return (
          <div key={stat.title} className="product-info-stat">
            <div className="product-info-stat-title">{stat.title}</div>
            <div className="product-info-stat-value">{stat.value}</div>
          </div>
        );
      })}
    </div>
  );
};
