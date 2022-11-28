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
import AddForm from './AddForm';

//Parent component - contains main data
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };  //[ {user:'a',game:'Galaga',points:0}, {user:'b',game:'Galaga',points:0}]
        this.addData = this.addData.bind(this);
    }

    addData(newData){
        const data = this.state.data;
        data.push(newData);
        this.setState({ data });
    }

    render() {
        const data = this.state.data;
        return (
            <div className="col-lg-12 text-center">
            <h1>React Forms - Controlled Component</h1>  
            <AddForm addData={this.addData} data={this.state.data}></AddForm>  
            <hr></hr>
            <ul>
                {data.map( (e,i)=>{
                    return (
                        <li key={i}>
                            {e.user} | {e.game} | {e.points} | {e.event}
                        </li>
                    )
                })

                }
            </ul>            
            </div>
        );
    }
}

export default App;
