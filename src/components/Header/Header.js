import React, {PureComponent} from 'react';
import './Header.css';
import {AuthConsumer} from "../../Auth";
import SectionTitle from "../SectionTitle";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

class Header extends PureComponent {

    render() {

        return <AuthConsumer>
            {({isAuthorized, logout}) => {
                return <header className="header">
                    <SectionTitle className="header__title">Loft Taxi</SectionTitle>
                    <div className="header__content">
                        <div className="header-menu">
                            <Button to='/map' component={Link}>КАРТА</Button>
                            <Button to='/profile' component={Link}>ПРОФИЛЬ</Button>
                            {isAuthorized ? <Button onClick={logout}>ВЫЙТИ</Button> :
                                <Button to='/login' component={Link}>ВОЙТИ</Button>}
                        </div>
                    </div>
                </header>;
            }}
        </AuthConsumer>
    }
}

export default Header;
