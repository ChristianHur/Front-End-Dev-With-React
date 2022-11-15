import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { FlightList } from './components/FlightList';
import { EditFlight } from './components/EditFlight';
import { FlightData } from './models/FlightData';
import { Nav } from './components/Nav';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flightData: FlightData };
  }
  render() {
    const Wrapper = (props) => {
      const params = useParams();
      return (
        <EditFlight
          flightData={this.state.flightData}
          updateFlight={this.updateFlight}
          {...{...props, match: { params } }}
        />
      );
    };
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route
            path="/flights/:id"
            element={<FlightList flightData={this.state.flightData} />}
          />
          <Route path="/edit/:id" element={<Wrapper />} />
        </Routes>
      </div>
    );
  }
  updateFlight = (idx, flight) => {
    const flightData = this.state.flightData;
    flightData[idx] = flight;
    this.setState({ flightData });
  }
}
export default App;
