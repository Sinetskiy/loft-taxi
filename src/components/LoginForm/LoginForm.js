import React, {PureComponent} from 'react';
import styles from './LoginForm.module.css';
import classNames from 'classnames';
import {connect} from "react-redux";
import {getAuthorizeError, getIsAuthorized, getLoginRequest} from "../../modules/Auth";
import {Redirect} from "react-router-dom";
import {TextField, Typography, Button} from "@material-ui/core";

const fields = [
    {
        id: 'email',
        label: 'Почта',
        type: 'text'
    },
    {
        id: 'password',
        label: 'Пароль',
        type: 'password'
    }
];

class LoginForm extends PureComponent {
    state = {
        values: {
            email: '',
            password: ''
        }
    };

    handleChange = event => {
        const {values} = this.state;
        this.setState({
            values: {...values, [event.target.name]: event.target.value}
        });
    };

    handleSubmit = () => {
        const {
            values: {email, password}
        } = this.state;

        const {getLoginRequest} = this.props;
        getLoginRequest({email, password});
    };

    render() {
        const {values} = this.state;
        const {isAuthorized, authorizeError} = this.props;

        if (isAuthorized)
            return <Redirect to='/map'/>;

        return (
            <div className={classNames(styles.jss841, styles.jss844, styles.jss849, styles.jss858)}>
                <div className={classNames(styles.jss842, styles.jss872)}>
                    <div className={classNames(styles.jss840)}>
                        <Typography className="login-form-title" variant='h3'>Войти</Typography>

                        {fields.map(({id, label, type}) => (
                            <div key={id}>
                                <TextField
                                    name={id}
                                    type={type}
                                    label={label}
                                    value={values[id]}
                                    onChange={this.handleChange}
                                />
                            </div>
                        ))}

                        {authorizeError !== '' && (
                            <p className="login-form-error">{authorizeError}</p>
                        )}

                        <div>
                            <Button onClick={this.handleSubmit}>
                                Войти
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            isAuthorized: getIsAuthorized(state),
            authorizeError: getAuthorizeError(state),
        }
    },
    {getLoginRequest}
)(LoginForm);
