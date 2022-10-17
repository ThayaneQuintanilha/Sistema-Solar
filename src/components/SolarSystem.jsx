import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div className='div-planetas' data-testid="solar-system">
        {/* <Title headline="Planetas" /> */}
        {planets.map((planetas) => (<PlanetCard
          key={ planetas.name }
          planetName={ planetas.name }
          planetImage={ planetas.image }
        />))}
      </div>
    );
  }
}
