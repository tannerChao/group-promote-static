import React, { Component } from 'react';
import { LocaleProvider } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from "../../store/persistor";
import { BrowserRouter } from '../../routers';
import { Loading } from '../../components';
const { store, persistor, history } = configureStore

// const epicMiddleware = createEpicMiddleware(rootEpic);
// const store = createStore(rootReducer, DevTools.instrument())
console.log(history)
class App extends Component {
    render() {
        return (
            <div>
                <Loading ref={ref => { Loading.instance = ref }} />
                <LocaleProvider locale={enUS}>
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            <ConnectedRouter history={history} store={store}>
                                <BrowserRouter />
                            </ConnectedRouter>
                        </PersistGate>
                    </Provider>
                </LocaleProvider>
            </div>
        );
    }
}
export { App }

