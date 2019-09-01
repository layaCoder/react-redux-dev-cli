import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './store/index';
import TestComp from './components/redux-thunk-demo';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

class App extends React.Component {
    render() {
        const store = createStore(reducer,applyMiddleware(thunk));
        return <Provider store={store}>
            <div>
                <TestComp />
            </div>
        </Provider>
    }
}
ReactDom.render(<App />, document.getElementById('app'));