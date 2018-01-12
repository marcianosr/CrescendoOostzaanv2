import './styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from 'src/reducers/rootReducer';

import { createLogicMiddleware } from 'redux-logic';
import logic from 'src/logic/logic';


import HomePageContainer from 'src/containers/HomePageContainer';
import SinglePostContainer from 'src/containers/SinglePostContainer';

import Navigation from 'src/components/navigation/Navigation'

const rootElement = document.querySelector('#root');

const logicMiddleware = createLogicMiddleware(logic); // The app's logic middleware (e.g posts)

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
        logicMiddleware,
    ),
  )
);

console.log('Initialize app.');

const initializeRoot = () => (
	render(
			// Setup Redux provider.
			// Create global store.
			// Setup Router.
			// Create containers.
			<Provider store={store}>
				<main>
					{/* <h1>Crescendo Oostzaan</h1> */}
					<Router>
						<div>
							<Navigation type='transparent' />

              <Route exact path='/' component={HomePageContainer} />
							<Route exact path='/artikelen/:slug' component={SinglePostContainer}
                 />
							<Route exact path='/over-crescendo' component={() => { return <h1>Over Crescendo</h1>}} />
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
[ ] - Use Redux devtools middleware
[ ] - Remove redux devtools middleware on production
[ ] - Create Store file

*/
