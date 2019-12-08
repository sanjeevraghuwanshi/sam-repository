import React, { Component } from 'react';
import { connect } from 'react-redux';

const BookLoaderHoc = () => {
    class BookLoader extends Component {
        constructor(props) {
            super(props);
            this.state = {
                book: null
            };
        }

        render() {
            return (
                <div>loader...</div>
            )
        }
    }

    const mapStateToProps = (state) => ({

    })

    const mapDispatchToProps = {

    }


    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(BookLoader)

}

export default BookLoaderHoc;