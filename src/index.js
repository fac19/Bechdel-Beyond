import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
	import('react-axe').then((axe) => {
		axe.default(React, ReactDOM, 1000);
		ReactDOM.render(<App />, document.getElementById('root'));
	});
} else {
	ReactDOM.render(<App />, document.getElementById('root'));
}

serviceWorker.unregister();
