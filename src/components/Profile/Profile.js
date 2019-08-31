import React from 'react';
import styles from "./Profile.module.css";
import classNames from 'classnames';
import {Form, Field} from "react-final-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {saveProfileAction} from "../../modules/Profile";

const Input = ({input, meta, label}) => {
    return <TextField {...input} label={label}/>;
};

const Profile = (props) => {

    const {saveProfile} = props;

    return <Form
        onSubmit={saveProfile}
        render={({handleSubmit, values}) => (<div className={classNames(styles.jss117, styles.jss120, styles.jss125)}>
            <div className={classNames(styles.jss118, styles.jss155)}>
                <div className={classNames(styles.jss12, styles.jss16, styles.jss13, styles.jss256)}>
                    <h1 className={classNames(styles.jss43, styles.jss58, styles.jss66)}>Профиль</h1>

                    <form onSubmit={handleSubmit}>
                        <h6 className={classNames(styles.jss43, styles.jss60, styles.jss70)}>Способ оплаты</h6>
                        <div className={classNames(styles.jss117, styles.jss141)}>
                            <div className={classNames(styles.jss118, styles.jss157, styles.jss179)}>
                                <div className={classNames(styles.jss222, styles.jss225)}>
                                    <Field
                                        required
                                        name="cardUserName"
                                        label="Имя владельца"
                                        defaultValue=""
                                        margin="normal"
                                        component={Input}
                                    />
                                </div>
                            </div>
                            <div className={classNames(styles.jss118, styles.jss157, styles.jss179)}>
                                <div className={classNames(styles.jss222, styles.jss225)}>
                                    <Field
                                        required
                                        name="cardNumber"
                                        label="Номер карты"
                                        defaultValue=""
                                        margin="normal"
                                        component={Input}
                                    />
                                </div>
                            </div>
                            <div className={classNames(styles.jss118, styles.jss157, styles.jss179)}>
                                <div className={classNames(styles.jss222, styles.jss225)}>
                                    <Field
                                        name="expDate"
                                        label="Дата окончания действия"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        component={Input}
                                    />
                                </div>
                            </div>
                            <div className={classNames(styles.jss118, styles.jss157, styles.jss179)}>
                                <div className={classNames(styles.jss222, styles.jss225)}>
                                    <Field
                                        required
                                        name="cvv"
                                        label="CVV"
                                        defaultValue=""
                                        margin="normal"
                                        component={Input}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className={classNames(styles.jss104, styles.jss78, styles.jss89,
                                styles.jss90, styles.jss257)}>Сохранить</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>)}/>;
};

export default connect(state => ({profile: state.profile}), {saveProfile: saveProfileAction})(Profile);