import React, {Component} from 'react';
import {PlanetDetails, PlanetList} from "../sw-components";

export default class PlanetPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render() {
        const {selectedItem} = this.state;
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <PlanetList
                        onItemSelected={this.onItemSelected}
                    />
                </div>
                <div className="col-md-6">
                    <PlanetDetails
                        itemId={selectedItem}
                    />
                </div>
            </div>
        )
    }
}