import React from 'react';
import { Routes } from './src/Routes';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from './Reducers';



const AppWrapper = () => {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  return (
    <Routes/>
  );
}

export default AppWrapper;