import React, {PureComponent} from 'react';
import './Header.css';
import SectionTitle from "../SectionTitle";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {getIsAuthorized, setLogout} from "../../modules/Auth";

class Header extends PureComponent {

    logout = () => {
        const {setLogout} = this.props;
        setLogout();
    };

    render() {

        const {isAuthorized} = this.props;

        return <header className="header">
            <SectionTitle className="header__title">Loft Taxi</SectionTitle>
            <div className="header__content">
                <div className="header-menu">
                    <Button to='/map' component={Link}>КАРТА</Button>
                    <Button to='/profile' component={Link}>ПРОФИЛЬ</Button>
                    {isAuthorized ? <Button onClick={this.logout}>ВЫЙТИ</Button> :
                        <Button to='/login' component={Link}>ВОЙТИ</Button>}
                </div>
            </div>
        </header>
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
