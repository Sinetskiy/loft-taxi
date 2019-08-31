import React from 'react';
import styles from "./MapsRoute.module.css";
import classNames from 'classnames';
import Select from 'react-select';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {
    fetchAddressListRequest,
    fetchCoordinatesRequest,
    clearCoordinates,
    getAddressList,
    getCoordinates
} from "../../../modules/Routes";

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
    };

    handleDestinationChange = destinationAddress => {
        this.setState({destinationAddress});
    };

    callTaxi = () => {
        const {startAddress, destinationAddress} = this.state;
        const {fetchCoordinatesRequest} = this.props;

        fetchCoordinatesRequest({startAddress: startAddress.value, destinationAddress: destinationAddress.value});
    };

    clearCoordinates = () => {

        const {clearCoordinates} = this.props;
        clearCoordinates();

    };

    render() {
        const {selectedOption} = this.state;
        const {addressList, coordinates} = this.props;

        if (!addressList)
            return null;

        const options = addressList.map(v => ({value: v, label: v}));

        return coordinates ? <div className={classNames(styles.jss12, styles.jss16, styles.jss13, styles.jss670)}>
                <div className={classNames(styles.jss267, styles.jss291)}>
                    <div className={classNames(styles.jss268, styles.jss307)}>
                        <h1 className={classNames(styles.jss43, styles.jss58, styles.jss65)}>Заказ размещён</h1>
                    </div>
                    Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                    <div className={classNames(styles.jss268, styles.jss307)}>
                        <Button onClick={this.clearCoordinates}>
                            Сделать новый заказ
                        </Button>
                    </div>
                </div>
            </div>
            : <div className={classNames(styles.jss12, styles.jss16, styles.jss13, styles.jss670)}>
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

export default connect(state => ({addressList: getAddressList(state), coordinates: getCoordinates(state)}),
    {fetchAddressListRequest, fetchCoordinatesRequest, clearCoordinates})(MapsRoute);