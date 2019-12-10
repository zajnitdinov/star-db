import React, {Component} from 'react';

class PlanetView extends Component {
    render() {
        const { id, name, population, rotationPeriod, diameter } = this.props.planet;
        return (
            <div>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img className='card-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
                    </div>
                    <div className="col-md-9">
                        <div className='card-body'>
                            <h5>{ name }</h5>
                            <div className="card-text">
                                <ul className="list">
                                    <li className="item">
                                        <span className="term">Population: </span>
                                        <span>{ population  }</span>
                                    </li>
                                    <li className="item">
                                        <span className="term">Rotation period: </span>
                                        <span>{ rotationPeriod }</span>
                                    </li>
                                    <li className="item">
                                        <span className="term">Diameter: </span>
                                        <span>{ diameter }</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanetView;