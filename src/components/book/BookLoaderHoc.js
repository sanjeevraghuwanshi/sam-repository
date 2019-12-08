import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from "../../actions/booksAction";

const BookLoaderHoc = (WrappedComponent) => {
    class BookLoader extends Component {
        constructor(props) {
            super(props);
            this.state = {
                book: null
            };
        }
        componentDidMount() {
            console.log("componentDidMount called", this.props.match.params.id);
            this.props.getBook(this.props.match.params.id);
        }
        render() {
            const { book } = this.props.bookDetails || null;
            if (!book) {
                return <div>Loading...</div>
            }
            return (
                <WrappedComponent {...this.props} book={book} />
            )
        }
    }

    const mapStateToProps = (state) => (
        {
            bookDetails: state.bookState
        });

    const mapDispatchToProps = dispatch => (
        {
            getBook: (id) => dispatch(getBook(id))
        });


    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(BookLoader)

}

export default BookLoaderHoc;