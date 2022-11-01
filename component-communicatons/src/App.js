import React from 'react';
import './App.css';
import { ChildA, ChildB } from './components/Children';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { parentData: 'Show', childData: "Child A" }
    //this.updateParent = this.updateParent.bind(this);
  }

  updateParent=(event)=>{
    this.setState({parentData: event.target.value})
  }

  updateChild=(data)=>{
    this.setState({childData : data})
  }

  render() {
    return (
      <div className="App">
        <h1>Component Communications in React</h1>

        <div className='component parent'>
          <p>Parent: [ {this.state.parentData} ]</p>
          <p>Child A: [ {this.state.childData} ]</p>
          <input onChange={this.updateParent}/>
        </div>

        <div className="component childA">
          <ChildA parentData={this.state.parentData} updateChild={this.updateChild} />
        </div>

        <div className="component childB">
          <ChildB parentData={this.state.parentData} childData={this.state.childData} />
        </div>

      </div>
    );
  }
}
