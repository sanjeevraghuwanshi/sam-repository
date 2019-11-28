import React from 'react';
import Stories from "./Stories";
import Login from "./auth/Login";
import './App.css';
import SearchStories from './SearchStories';

const App = () => {
    return (
        <div className="app">
            <Login />
            <div className="interactions">
                <SearchStories />
            </div>
            <Stories />
        </div>
    );
}

export default App;