import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { HashRouter, Route, Switch } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './containers/app';

import store from './store';

const history = createHistory();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Switch>
                <Route path= "/" name="App" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();