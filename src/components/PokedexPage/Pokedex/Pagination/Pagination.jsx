import React from 'react';
import './Pagination.css';

export default function Pagination({ gotoNextPage }) {
  return (
    <div>
      {gotoNextPage && <button onClick={gotoNextPage}>Load More</button>}
    </div>
  )
}