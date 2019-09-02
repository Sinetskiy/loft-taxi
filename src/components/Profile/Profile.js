import React from 'react';
import styles from "./Profile.module.css";
import classNames from 'classnames';
import {Form, Field} from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {saveProfileAction} from "../../modules/Profile";
import {Link} from "react-router-dom";

const Input = ({input, meta, label}) => {
    return <div>
        <TextField {...input} label={input.type === 'date' ? '' : label}/>
        {meta.error && meta.visited && !meta.active && (
            <pre style={{color: "red"}}>{meta.error}</pre>
        )}
    </div>;
};

const validate = values => {
    const errors = {};
    if (!values.cardUserName) {
        errors.cardUserName = "Имя владельца обязательно";
    }

    if (values.cardUserName && values.cardUserName.match(/[^a-zA-Z]+/)) {
        errors.cardUserName = "Имя владельца должно содержать только буквы латинского алфавита";
    }
    if (!values.cardNumber) {
        errors.cardNumber = "Номер карты обязательно";
    }

    if (values.cardNumber && values.cardNumber.length !== 16) {
        errors.cardNumber = "Номер карты должен содержать 16 цыфр";
    }

    if (values.cardNumber && values.cardNumber.match(/[^0-9]+/)) {
        errors.cardNumber = "Номер карты должен содержать только цыфры";
    }

    if (!values.expDate) {
        errors.expDate = "Дата окончания действия обязательна";
    }

    if (!values.cvv) {
        errors.cvv = "CVV обязательно";
    }

    if (values.cvv && values.cvv.length !== 3) {
        errors.cvv = "Номер карты должен содержать 3 цыфры";
    }

    if (values.cvv && values.cvv.match(/[^0-9]+/)) {
        errors.cvv = "Номер карты должен содержать только цыфры";
    }

    return errors;
};

class Profile extends React.Component {
    state = {
        updated: false,
    };

    save = (values) => {
        const {saveProfile} = this.props;
        saveProfile(values);
        this.setState({updated: true});
    };

    render() {
        const {updated} = this.state;
        const {profile} = this.props;

        return <div className={classNames(styles.jss266, styles.jss269, styles.jss274)}>
            <div className={classNames(styles.jss267, styles.jss304)}>
                <div className={classNames(styles.jss12, styles.jss16, styles.jss13, styles.jss530)}>
                    <h1 className={classNames(styles.jss43, styles.jss58, styles.jss66)}>Профиль</h1>
                    {updated ? <div className={classNames(styles.jss266, styles.jss290)}>
                            <div className={classNames(styles.jss267, styles.jss306)}>
                                <p className={classNames(styles.jss43, styles.jss52)}>
                                    Платёжные данные обновлены. Теперь вы можете заказывать такси.
                                </p>
                            </div>
                            <div className={classNames(styles.jss267, styles.jss306)}>
                                <Button component={Link} to='/map'>
                                    Перейти на карту
                                </Button>
                            </div>
                        </div>
                        : <Form
                            onSubmit={this.save}
                            initialValues={profile}
                            validate={validate}
                            render={({handleSubmit, values}) => (


                                <form onSubmit={handleSubmit}>
                                    <h6 className={classNames(styles.jss43, styles.jss60, styles.jss70)}>Способ
                                        оплаты</h6>
                                    <div className={classNames(styles.jss117, styles.jss141)}>
                                        <table width='800px'>
                                            <tr>
                                                <td><Field
                                                    required
                                                    name="cardUserName"
                                                    label="Имя владельца"
                                                    component={Input}
                                                /></td>
                                                <td><Field
                                                    name="expDate"
                                                    label="Дата окончания действия"
                                                    type="date"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    component={Input}
                                                /></td>
                                            </tr>
                                            <tr>
                                                <td><Field
                                                    required
                                                    name="cardNumber"
                                                    label="Номер карты"
                                                    component={Input}
                                                /></td>
                                                <td><Field
                                                    required
                                                    name="cvv"
                                                    label="CVV"
                                                    component={Input}
                                                /></td>
                                            </tr>
                                        </table>
                                        <Button type="submit"
                                                className={classNames(styles.jss104, styles.jss78, styles.jss89,
                                                    styles.jss90, styles.jss257)}>Сохранить</Button>
                                    </div>
                                </form>
                            )}/>}
                </div>
            </div>
        </div>;
    }
};

export default connect(state => ({profile: state.profile}), {saveProfile: saveProfileAction})(Profile);