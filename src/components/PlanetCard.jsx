import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    // const name = `Planeta ${planetName}`;
    return (
      <div className="planetas" data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
