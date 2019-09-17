import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './store/index';
import Layout from './components/layout';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Login from './components/login'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


class App extends React.Component {
    render() {
        const store = createStore(reducer, applyMiddleware(thunk));
        return <Provider store={store}>
            <Router>
                <div>
                    <Route exact path='/' render={() => <Redirect to={{ pathname: '/login' }} />} ></Route>
                    <Route path='/layout' component={Layout} />
                    <Route exact path='/login' component={Login} />
                </div>
            </Router>
        </Provider>
    }
}
ReactDom.render(<App />, document.getElementById('app'));