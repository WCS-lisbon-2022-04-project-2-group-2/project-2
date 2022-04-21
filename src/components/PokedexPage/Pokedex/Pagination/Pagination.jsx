import React from 'react';
import './Pagination.css';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoNextPage && <button onClick={gotoPrevPage}>PREV</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>NEXT</button>}
    </div>
  )
}