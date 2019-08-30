import React from 'react';
import styles from "./MapsRoute.module.css";
import classNames from 'classnames';
import Select from 'react-select';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {fetchAddressListRequest, fetchCoordinatesRequest, getAddressList} from "../../../modules/Routes";

class MapsRoute extends React.Component {
    state = {
        startAddress: null,
        destinationAddress: null,
    };

    componentDidMount() {
        const {fetchAddressListRequest} = this.props;
        fetchAddressListRequest();
    }

    handleStartChange = startAddress => {
        this.setState({startAddress});
        console.log(`startAddress option selected:`, startAddress);
    };

    handleDestinationChange = destinationAddress => {
        this.setState({destinationAddress});
        console.log(`destinationAddress option selected:`, destinationAddress);
    };

    callTaxi = () => {
        const {startAddress, destinationAddress} = this.state;

        fetchCoordinatesRequest({startAddress: startAddress.value, destinationAddress: destinationAddress.value});
        console.log(`call taxi ${startAddress.value} to ${destinationAddress.value}`);
    };

    render() {
        const {selectedOption} = this.state;
        const {addressList} = this.props;

        if (!addressList)
            return null;

        const options = addressList.map(v => {
            return {value: v, label: v}
        });

        return <div className={classNames(styles.jss12, styles.jss16, styles.jss13, styles.jss670)}>
            <div className={classNames(styles.jss267, styles.jss291)}>
                <div className={classNames(styles.jss268, styles.jss307)}>
                    <h1 className={classNames(styles.jss43, styles.jss58, styles.jss65)}>Вызов такси</h1>
                </div>
                <div className={classNames(styles.jss268, styles.jss307)}>
                    <Select
                        value={selectedOption}
                        onChange={this.handleStartChange}
                        options={options}
                    />
                </div>
                <div className={classNames(styles.jss268, styles.jss307)}>
                    <Select
                        value={selectedOption}
                        onChange={this.handleDestinationChange}
                        options={options}
                    />
                </div>
                <div className={classNames(styles.jss268, styles.jss307)}>
                    <Button onClick={this.callTaxi}>
                        Вызвать такси
                    </Button>
                </div>
            </div>
        </div>;
    }
}

export default connect(state => {
    return {
        addressList: getAddressList(state),
    }
}, {fetchAddressListRequest, fetchCoordinatesRequest})(MapsRoute);