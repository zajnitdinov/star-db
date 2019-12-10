import React from 'react';
import {withRouter} from 'react-router-dom'
import {PersonDetails, PersonList} from "../sw-components";

const PeoplePage = ({match, history}) => {
    const {id} = match.params;
    return (
        <div className="row mb2">
            <div className="col-md-6">
                <PersonList
                    onItemSelected={(id) => history.push(id)}
                />
            </div>
            <div className="col-md-6">
                <PersonDetails
                    itemId={id}
                />
            </div>
        </div>
    )
};

export default withRouter(PeoplePage);