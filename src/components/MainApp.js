import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import LoginTab from './Login';
import RegisterTab from './Register';
import App from './App';

class MainApp extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Redirect from="/" to="/login" />
                        <Route path="/login" exact component={LoginTab} />
                        <Route path="/register" exact component={RegisterTab} />
                        <Route path="/riders" exact component={App} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainApp;