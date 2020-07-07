import React from 'react';
import Navigator from './routes/homeStack'
import {Provider} from 'react-redux';
import store from './store'

export default function App() {
        return (
            <Provider store={store}>
                    <Navigator/>
            </Provider>
        );
};
