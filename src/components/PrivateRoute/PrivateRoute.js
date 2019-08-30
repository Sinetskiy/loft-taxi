import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getIsAuthorized} from "../../modules/Auth";

class PrivateRoute extends Component {

    loginPath = '/login';

    render() {
        const {isAuthorized} = this.props;
        return isAuthorized ? <Route {...this.props} /> : <Redirect to={this.loginPath}/>;
    }

}

export default connect(
    state => {
        return {
            isAuthorized: getIsAuthorized(state),
        }
    }
)(PrivateRoute);
