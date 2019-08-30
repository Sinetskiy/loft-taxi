import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../Layout';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Map from '../Map';
import Profile from "../Profile";
import PrivateRoute from "../PrivateRoute";

class App extends PureComponent {
    render() {
        return (
                <BrowserRouter>
                    <Layout header={Header}>
                        <Switch>
                            <PrivateRoute exact path='/map' component={Map}/>
                            <PrivateRoute exact path='/profile' component={Profile}/>
                            <Route exact path='/login' component={LoginForm}/>
                            <Redirect to='/login'/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
        );
    }
}

export default App;
