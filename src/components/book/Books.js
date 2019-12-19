import React, { Component, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../actions/booksAction";
import Table from "./Table";
import history from "../../utils/history";

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
    const redirectTo = () => {
        history.push('/app/book/addNew');
    }
    return (
        <div className='w-100'>
            <h2 className="pb-4">Books Collection</h2>
            <button type="button" className="btn btn-primary mb-4" onClick={redirectTo}>Add new</button>
            {!!books ? <Table data={books}></Table> : ""}
        </div>
    );
}

export default Books;