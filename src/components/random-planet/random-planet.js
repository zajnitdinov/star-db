import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";
import './random-planet.css'
import Spinner from "../spinner";
import ErrorMessage from "../error-message";
import PlanetView from "./planet-view";

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        // const interval = setInterval(this.updatePlanet, 1000)
    }

    onPlanetLoaded = (planet) => {
        this.setState(
            {
                planet,
                loading: false
            });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet() {
        const id = Math.floor(Math.random()*25 + 2);
        // const id = 100000;
        this.swapiService
            .getPlanet(id)
            .then((planet) => { return this.onPlanetLoaded(planet) })
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorMessage/> : null;
        const loader = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className="card mb-3">
                {errorMessage}
                {loader}
                {content}
            </div>
        )
    }
}

export default RandomPlanet;