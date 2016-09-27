import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App host="ws://95.85.41.108:8080/chatapp" />, document.getElementById('chat-app'));
