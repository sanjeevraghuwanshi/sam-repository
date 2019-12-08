import React from 'react';
import history from "../../utils/history";

const Table = (props) => {
    const data = props.data;
    const redirectToBookDetails = (params) => {
        history.push(`/app/book/bookDetails/${params}`)
    };
    const redirectToBookSummary = (params) => {
        history.push(`/app/book/bookSummary/${params}`)
    };
    return (

        <div className="table-responsive">
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(book => (
                        <tr key={book.id}>
                            {Object.keys(book).map((value, i) => (
                                <td key={i}>{value === 'id'
                                    ? <span>
                                        <button type="button" className="btn btn-primary mr-2" onClick={() => redirectToBookDetails(book[value])}>Book details</button>
                                        <button type="button" className="btn btn-secondary" onClick={() => redirectToBookSummary(book[value])}>Book summary</button>
                                    </span>
                                    : value === 'image'
                                        ? ""
                                        : book[value]}</td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Table;