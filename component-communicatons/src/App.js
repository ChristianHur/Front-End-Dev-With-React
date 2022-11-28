/**
MIT License

Copyright (c) 2022 Christian Hur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/

import React from 'react';
import './App.css';
import { ChildA, ChildB } from './components/Children';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { parentData: 'Show', childData: "Child A" }
    //this.updateParent = this.updateParent.bind(this);
  }

  updateParent = event => this.setState({parentData: event.target.value});
  updateChild = data => this.setState({childData : data});

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
