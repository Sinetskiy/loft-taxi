import React, {PureComponent} from 'react';
import styles from './Header.module.css';
import classNames from 'classnames';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {getIsAuthorized, setLogout} from "../../modules/Auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";

class Header extends PureComponent {

    logout = () => {
        const {setLogout} = this.props;
        setLogout();
    };

    render() {

        const {isAuthorized} = this.props;
        return <AppBar
            className={classNames(styles.jss12, styles.jss18, styles.jss3, styles.jss7, styles.jss10, styles.jss1)} >
            <Toolbar className={classNames(styles.jss39, styles.jss41, styles.jss40)}>
                <Typography className={classNames(styles.jss43, styles.jss49, styles.jss2)} variant='h4'>Loft
                    Taxi</Typography>
                <Button className={classNames(styles.jss104, styles.jss78, styles.jss80, styles.jss83)}
                        to='/map' component={Link}>КАРТА</Button>
                <Button className={classNames(styles.jss104, styles.jss78, styles.jss80, styles.jss83)}
                        to='/profile' component={Link}>ПРОФИЛЬ</Button>
                {isAuthorized ? <Button onClick={this.logout}>ВЫЙТИ</Button> :
                    <Button className={classNames(styles.jss104, styles.jss78, styles.jss80, styles.jss83)}
                            to='/login' component={Link}>ВОЙТИ</Button>}
            </Toolbar>
        </AppBar>
    }
}

export default connect(
    state => {
        return {
            isAuthorized: getIsAuthorized(state),
        }
    },
    {setLogout}
)(Header);
