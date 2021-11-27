# How To Retrieve URL Parameters Usinv React Router 6
React Router version 6 introduces several powerful new features, as well as improved compatibility with the latest versions of React. It also introduces a few breaking changes from version 5. This document is a comprehensive guide on how to upgrade your v4/5 app to v6 while hopefully being able to ship as often as possible as you go.  Below are two examples of changes that you will need to adhere to if you're running version 6.  To learn more about all the new changes and how to upgrade to version 6, please visit https://reactrouterdotcom.fly.dev/docs/en/v6/upgrading/v5

- React Router v6 introduces a `Routes` component that replaces `Switch`.  In order to use v6, you'll need to convert all your `<Switch>` elements to `<Routes>`.
- React Router v6 introduces a `element` property that replaces the `render` property/function.  Thus passing URL parameters to class components is a little different.  There are no changes to function components.

## :one: How to Retrieve URL Parameters Using *Function Components*
Below is one common and easy way to create react routes.
### index.js
First, let's wrap the root component with the BrowserRouter.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
```
### App.js Component
In the `App.js` module, let's create a route to the `/flights/:id` url.  The `FlightList` component is a **Function Component** to display information about a single flight record.  In order to do that, we'll need to fetch the `id` parameter from the URL.
```js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Nav, Footer, FlighData, FlightList } from "./components";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flightData: FlighData };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/flights/:id" element={<FlightList flightData={this.state.flightData} />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
```
### FlightList.js Component
Now, in the `FlightList` component, we'll retrieve the `id` URL parameter via the `useParams()` function.
```js
import React from 'react';
import { useParams } from 'react-router-dom';

function FlightList(props) {
    let { id } = useParams(); // Unpacking and retrieve id
    let index = props.flightData.findIndex(e => e.id === parseInt(id));
    let flight = this.props.flightData[index];
    return (
        <div>
            <p>Flight Number: {flight.flight_no}</p>
            <p>Airline: {flight.airline}</p>
            <p>Departure Airport: {flight.departure_airport}</p>
            <p>Arrival Airport: {flight.arrival_airport}</p>
            <p>Depart Date: {flight.departure_date}</p>
            <p>Arrival Date: {flight.arrival_airport}</p>
        </div>
    )
}
export default FlightList;
```

## :two: How to Retrieve URL Parameters Using *Class Components*
Class Components do not have access to Hooks so they cannot use `useParams()` from the react router.  Of course there are other methods to pass data down to child components (e.g. using Context).  The example demonstrated here is how to use a *Wrapper function component* to pass the `params` via the `match` property to a *Class Component*.  Finally, it'll be possible to retrieve specific parameters from the `params` via the `props` object.

### App.js Component
In the `App.js` module, let's create a route to the `/edit/:id` url.  The `EditFlight` component is a **Class Component** to edit an existing flight record.  In order to do that, we'll need to fetch the `id` parameter from the URL.
```js
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Nav, Footer, FlighData, EditFlight } from "./components";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flightData: FlighData };
    this.updateFlight = this.updateFlight.bind(this);
  }

  updateFlight(idx, flight) {
    let temp = this.state.flightData;
    temp[idx] = flight;
    this.setState({ flightData: temp })
  }

  render() {
    const Wrapper = (props) => {
      const { params } = useParams();
      return <EditFlight flightData={this.state.flightData} updateFlight={this.updateFlight} {...{ props, match: {params}} } />
    }
    return (
      <div className="App">
        <Nav />
        <Routes>          
          <Route path="/edit/:id" element={<Wrapper />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
```
### EditFlight.js Component
In the `EditFlight` component, retrieve the `id` from the URL parameters via the `props` object.  After the `id` is obtained, search  the `flightData` list and retrieve the `flight` record matching the `id`.  Finally, pass this record to another child component `FlightForm` to populate the form for editing.
```js
import React from 'react';
import FlightForm from './FlightForm';

class EditFlight extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        let { id } = this.props.match.params;  // Unpacking and retrieve id
        let index = this.props.flightData.findIndex(e => e.id === parseInt(id));  // Get the index of matching record
        let flight = this.props.flightData[index];  // Get the record
        return <FlightForm flight={flight} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />         
    }

    handleChange(event) {
        // Implemenation here
    }

    handleSubmit(event) {
        event.preventDefault();
        // Implementation here
    }
}

export default EditFlight;
```

