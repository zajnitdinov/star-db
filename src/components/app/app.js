import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../header'
import RandomPlanet from "../random-planet";
import './app.css'
import {PeoplePage, StarshipPage, PlanetPage} from '../pages';
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className='container'>
                        <Header/>
                        <RandomPlanet/>
                        <Route path='/people/:id?' component={PeoplePage}/>
                        <Route path='/planets' component={PlanetPage}/>
                        <Route path='/starships' component={StarshipPage }/>
                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    }
};

