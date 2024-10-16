
import React from "react";
import { Link } from "react-router-dom";


export default function BookCard({ book }) {
  return (
    <div className="col-md-2">
      <Link to={`/book/${book.id}`}>
        <img className="w-100 " src={book.image} alt="" />
        <h1
          className="text-truncate h4 text-center mt-1 text-warning"
          data-toggle="tooltip"
          data-placement="start"
          title={book.title ? book.title : "unkown"}
        >
          {book.title ? book.title : "unkown"}
        </h1>
      </Link>
    </div>
  );
}
