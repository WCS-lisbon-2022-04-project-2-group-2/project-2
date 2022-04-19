import React from 'react'

export default function Pagination({ gotoNextPage }) {
  return (
    <div>
      {gotoNextPage && <button onClick={gotoNextPage}>Load More</button>}
    </div>
  )
}