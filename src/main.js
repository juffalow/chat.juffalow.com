import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App host="ws://localhost:8080/chatapp" />, document.getElementById('chat-app'));
