import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createEpicMiddleware, } from "redux-observable";
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from '../reducers'
import epics from "../epics";

const history = createBrowserHistory()

const middleware = routerMiddleware(history)
const epicMiddleware = createEpicMiddleware();
const persistedReducer = persistReducer({ key: 'root', storage, }, reducers);

// const store = createStore(persistedReducer, { login: {} }, applyMiddleware(epicMiddleware));
let store = process.env.NODE_ENV === 'production' ? (
    createStore(persistedReducer, applyMiddleware(epicMiddleware, middleware))
) : (
        window.__REDUX_DEVTOOLS_EXTENSION__ ? (
            createStore(persistedReducer, compose(applyMiddleware(epicMiddleware, middleware), window.__REDUX_DEVTOOLS_EXTENSION__()))
        ) : (
                createStore(persistedReducer, applyMiddleware(epicMiddleware, middleware))
            )
    )


const persistor = persistStore(store, null, () => {
    console.log('persist complate');
});
epicMiddleware.run(epics);

// persistor.purge();

export default { store, persistor, history }