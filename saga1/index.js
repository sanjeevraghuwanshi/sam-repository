import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from './components/App';

import "./index.css";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    // <App
    //     stories={getReadableStories(store.getState())}
    //     onArchive={id => store.dispatch(doArchiveStory(id))}
    // />,
    , document.getElementById('root'));
