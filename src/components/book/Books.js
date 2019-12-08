import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../actions/booksAction";
import Table from "./Table";

const Books = () => {

    const { books } = useSelector(state => {
        return state.bookState
    });
    const dispatch = useDispatch();

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = () => {
        dispatch(getBooks())
    };

    return (
        <div className='w-100'>
            <h2 className="pb-4">Books Collection</h2>
            {!!books ? <Table data={books}></Table> : ""}
        </div>
    );
}

export default Books;