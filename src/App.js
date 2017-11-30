import './styles/app.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

import HomePageContainer from './containers/HomePageContainer';

console.log('Initialize app.');

const rootElement = document.querySelector('#root');

const store = createStore(rootReducer);

const initializeRoot = () => (
	render(
			// Setup Redux provider.
			// Create global store.
			// Setup Router.
			// Create containers.
			<Provider store={store}>
				<main>
					<h1>Crescendo Oostzaan</h1>
					<Router>
						<div>
							<li><Link to="/">Home</Link></li>
							<Route exact path='/' component={HomePageContainer} />
						</div>
					</Router>
				</main>
			</Provider>,
			rootElement
	)
)



initializeRoot();

/* List of to do's:
Work of this list before deploying:

https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e

[ ] - Check code coverage in devtools and try to figure out if you need to remove unused code by using Tree shaking: https://webpack.js.org/guides/tree-shaking/

*/
