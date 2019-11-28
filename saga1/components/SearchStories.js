import React, { Component } from 'react';
import Button from "./Button";
import { connect } from "react-redux";
import { doFetchStories } from '../actions/story';


class SearchStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        if (query) {
            this.props.onFetchStories(query);
            this.setState({ query: '' });
        }

    }
    handleChange = e => {
        const { value } = e.target;
        this.setState({ query: value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                />

                <Button type="submit">Search</Button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query))
})

export default connect(null, mapDispatchToProps)(SearchStories);