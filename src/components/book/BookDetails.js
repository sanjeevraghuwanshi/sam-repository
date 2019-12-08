import React, { Component } from 'react'
import BookLoaderHoc from "./BookLoaderHoc";

const cardStyle = {
    width: '18rem',
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const BookDetails = ({ book }) => {
    return (
        <div className="card" style={cardStyle}>
            <img className="card-img-top"
                src={require(`../../assets/images/${book.image}`)}
                alt={book.summary} />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
            </div>
        </div>
    );
}

export default BookLoaderHoc(BookDetails);