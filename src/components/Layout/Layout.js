import React, {PureComponent} from 'react';
import './Layout.css';

class Layout extends PureComponent {
    render() {
        const {header, children} = this.props;

        return (
            <React.Fragment>
                {header ? React.createElement(header) : ''}
                {children}
            </React.Fragment>
        )
    }
}

export default Layout;
