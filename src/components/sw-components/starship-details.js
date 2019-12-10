import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model'/>
            <Record field='length' label='Length'/>
            <Record field='costInCredits' label='Cost'/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    const { getStarship, getStarshipImage } = swapiService;
    return {
        getData: getStarship,
        getImage: getStarshipImage
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);