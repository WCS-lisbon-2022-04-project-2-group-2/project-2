import React from "react";
import "./Pagination.css";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className="btn-container">
      {gotoNextPage && (
        <button className="btn-prev" onClick={gotoPrevPage}>
          BACK
        </button>
      )}
      {gotoNextPage && (
        <button className="btn-next" onClick={gotoNextPage}>
          NEXT
        </button>
      )}
    </div>
  );
}
