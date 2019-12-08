import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getBook } from "../../actions/booksAction";

const cardStyle = {
    width: '18rem',
    // WebkitTransition: 'all', // note the capital 'W' here
    // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class BookDetails extends Component {
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

}

const mapStateToProps = (state) => (
    {
        bookDetails: state.bookState
    });

const mapDispatchToProps = dispatch => (
    {
        getBook: (id) => dispatch(getBook(id))
    });

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);