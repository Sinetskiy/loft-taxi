import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {getAuthorizeError, getIsAuthorized, getLoginRequest, setLogout} from "../modules/Auth";

const {Provider, Consumer: AuthConsumer} = React.createContext('');

class AuthProvider extends PureComponent {

    state = {email: '', authorizeError: '', isAuthorized: false};

    authorize = (email, pass) => {
        const {getLoginRequest} = this.props;
        getLoginRequest({email, pass});
    };

    logout = () => {
        const {setLogout} = this.props;
        setLogout();
    };

    getProviderValue = () => {
        return {...this.props, authorize: this.authorize, logout: this.logout};
    };

    render() {
        const {children} = this.props;
        return <Provider value={this.getProviderValue()}>{children}</Provider>;
    }
}

const TestProvider = Provider;

const AuthProviderConnected = connect(
    state => {
        return {
            isAuthorized: getIsAuthorized(state),
            authorizeError: getAuthorizeError(state),
        }
    },
    {getLoginRequest, setLogout}
)(AuthProvider);

export {AuthProviderConnected as AuthProvider, AuthConsumer, TestProvider};
