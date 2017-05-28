import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Layout from './containers/Layout'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App> <Layout /> </App>, document.getElementById('root'));
registerServiceWorker();
