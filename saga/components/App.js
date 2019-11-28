import React from 'react';
import Stories from "./Stories";

import './App.css';
import SearchStories from './SearchStories';

const App = () => {
    return (
        <div className="app">
            <div className="interactions">
                <SearchStories />
            </div>
            <Stories />
        </div>
    );
}

export default App;