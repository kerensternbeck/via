import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DriverCard from './drivercard';
import './main.scss';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            hoveredDriverId: ''
        }
    }

    componentDidMount() {
        this.props.store.getDriverData();
    }

    render() {
        return (
            <div className="container">
                {this.renderDrivers()}
            </div>
        );
    }

    renderDrivers() {
        const { drivers } = this.props.store;
        return (
            <React.Fragment>
                {drivers.map((driverInfo) => {
                    return (<DriverCard
                        data={driverInfo}
                        key={driverInfo.email || driverInfo.name}
                    />)
                })}
            </React.Fragment >
        )
    }
}

export default (observer(Main));
