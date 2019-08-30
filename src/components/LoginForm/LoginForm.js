import React, {PureComponent} from 'react';
import './LoginForm.css';
import Button from '../Button';
import {connect} from "react-redux";
import {getAuthorizeError, getIsAuthorized, getLoginRequest} from "../../modules/Auth";
import {Redirect} from "react-router-dom";

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
            <div className="login-form">
                <h1 className="login-form-title">Авторизация</h1>

                {fields.map(({id, label, type}) => (
                    <p key={id} className="field">
                        <label className="field__label" htmlFor={id}>
                            <span className="field-label">{label}</span>
                        </label>
                        <input
                            id={id}
                            className={`field__input field-input t-input-${id}`}
                            type={type}
                            name={id}
                            value={values[id]}
                            onChange={this.handleChange}
                        />
                    </p>
                ))}

                {authorizeError !== '' && (
                    <p className="login-form-error t-login-error">{authorizeError}</p>
                )}

                <div className="login-form__buttons">
                    <Button onClick={this.handleSubmit} className="t-login">
                        Войти
                    </Button>
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
