import React from 'react';
import ReactDOM from 'react-dom/client'; //오류 1 해결
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import {applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';

const createStoreWithMiddleware=applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);
const rootNode = document.getElementById("root"); //오류 2 해결
ReactDOM.createRoot(rootNode).render( // 오류 2 해결
  <Provider 
    store={createStoreWithMiddleware(Reducer,
            window._REDUX_DEVTOOLS_EXTENSION_ &&
            window._REDUX_DEVTOOLS_EXTENSION_()
        )}
  >
    <App />
  </Provider>
,document.getElementById('root'));

  /*const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);   */ 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
