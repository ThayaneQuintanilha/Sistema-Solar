import React from 'react';
import './App.css'
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <main className='main'>
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
        <PlanetCard />
        <MissionCard />
        </main>
      </div>
    );
  }
}

export default App;
