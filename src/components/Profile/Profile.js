import React from 'react';
import styles from "./Profile.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Profile = (props) => {
    return <div>
        <div>
            <h1>Профиль</h1>
            <form>
                <div>
                    <div>
                        <TextField
                            required
                            id="cardUserName"
                            label="Имя владельца"
                            defaultValue=""
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="cardNumber"
                            label="Номер карты"
                            defaultValue=""
                            margin="normal"
                        />
                    </div>
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
                    <div>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            defaultValue=""
                            margin="normal"
                        />
                    </div>
                    <div>
                        <Button type="submit">Сохранить</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>;
};

export default Profile;