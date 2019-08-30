import React from 'react';
import styles from "./Profile.module.css";
import classNames from 'classnames';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Profile = (props) => {
    return <div className={classNames(styles.jss267, styles.jss270, styles.jss275)}>
        <div className={classNames(styles.jss268, styles.jss305)}>
            <div className={classNames(styles.jss12, styles.jss16, styles.jss13, styles.jss421)}>
                <h1 className={classNames(styles.jss43, styles.jss58, styles.jss66)}>Профиль</h1>
                <form>
                    <h6 className={classNames(styles.jss43, styles.jss60, styles.jss70)}>Способ оплаты</h6>
                    <div className={classNames(styles.jss267, styles.jss291)}>
                        <div className={classNames(styles.jss268, styles.jss307, styles.jss329)}>
                            <div className={classNames(styles.jss372, styles.jss375)}>
                                <TextField
                                    required
                                    id="cardUserName"
                                    label="Имя владельца"
                                    defaultValue=""
                                    margin="normal"
                                />
                            </div>
                        </div>
                        <div className={classNames(styles.jss268, styles.jss307, styles.jss329)}>
                            <div>
                                <TextField
                                    required
                                    id="cardNumber"
                                    label="Номер карты"
                                    defaultValue=""
                                    margin="normal"
                                />
                            </div>
                        </div>
                        <div className={classNames(styles.jss268, styles.jss307, styles.jss329)}>
                            <div>
                                <TextField
                                    id="expDate"
                                    label="Дата окончания действия"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={classNames(styles.jss268, styles.jss307, styles.jss329)}>
                            <div>
                                <TextField
                                    required
                                    id="cvv"
                                    label="CVV"
                                    defaultValue=""
                                    margin="normal"
                                />
                            </div>
                        </div>
                        <div
                            className={classNames(styles.jss104, styles.jss78, styles.jss89, styles.jss90, styles.jss422)}>
                            <Button type="submit">Сохранить</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>;
};

export default Profile;