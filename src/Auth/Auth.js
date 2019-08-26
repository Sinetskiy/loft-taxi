import React, {PureComponent} from 'react';

const {Provider, Consumer: AuthConsumer} = React.createContext('');

class AuthProvider extends PureComponent {

    state = {email: '', authorizeError: '', isAuthorized: false};

    authorize = (login, pass) => {
        if (login === 'stu@dent.com' && pass === '123') {
            this.setState({email: login, authorizeError: '', isAuthorized: true});
        } else {
            this.setState({ authorizeError: 'Email или пароль введён не верно'});
        }
    };

    logout = () => {
        this.setState({email: '', authorizeError: '', isAuthorized: false});
    };

    getProviderValue = () => {
        return {...this.state, authorize: this.authorize, logout: this.logout};
    };

    render() {
        const {children} = this.props;
        return <Provider value={this.getProviderValue()} >{children}</Provider>;
    }
}

const TestProvider = Provider;

export {AuthProvider, AuthConsumer, TestProvider};
