import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers'
import React from "react";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    const { getPerson, getPersonImage } = swapiService;
    return {
        getData: getPerson,
        getImage: getPersonImage
    }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);