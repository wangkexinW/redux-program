import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import AddToDo from './Containers/AddToDo.js';
import ToDoList from './Containers/ToDoList.js';
import Footer from './Containers/Footer.js';
import {Provider} from 'react-redux';
import rootReducer from './Reducers/RootReducer.js';

let store = createStore(rootReducer);

class App extends Component {
    render () {
        return (
            <div>
                <AddToDo/>
                <ToDoList/>
                <Footer/>
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <Provider store={store}>
            <App></App>
        </Provider>,
        document.getElementById('root')
    )
}

render();
