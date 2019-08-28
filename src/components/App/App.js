import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../Layout';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Map from '../Map';
import {AuthProvider, AuthConsumer} from '../../Auth';
import Profile from "../Profile";

class App extends PureComponent {
    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Layout header={Header}>
                        <AuthConsumer>
                            {({isAuthorized, authorize, authorizeError}) =>
                                isAuthorized ? (
                                    <Switch>
                                        <Route exact path='/map' component={Map}/>
                                        <Route exact path='/profile' component={Profile}/>
                                        <Redirect to='/map'/>
                                    </Switch>
                                ) : (
                                    <Switch>
                                        <Route exact path='/login' component={ () =>
                                              <LoginForm authorize={authorize} authorizeError={authorizeError}/> }/>
                                        <Redirect to='/login'/>
                                    </Switch>
                                )
                            }
                        </AuthConsumer>
                    </Layout>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}

export default App;
