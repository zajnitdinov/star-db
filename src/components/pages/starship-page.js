import React, {Component} from 'react';
import {StarshipDetails, StarshipList} from "../sw-components";

export default class StarshipPage extends Component {

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
                    <StarshipList
                        onItemSelected={this.onItemSelected}
                    />
                </div>
                <div className="col-md-6">
                    <StarshipDetails
                        itemId={selectedItem}
                    />
                </div>
            </div>
        )
    }
}