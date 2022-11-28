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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { point: 10 }
        this.updateMe = this.updateMe.bind(this);
        console.log('Parent Constructor');
    }    
    updateMe() {
        //this.state.point = Math.floor(Math.random() * 10);
        let rnd = Math.floor(Math.random() * 10);
        this.setState({point: rnd});
        console.log('Parent UPdateMe');
    }
    render() {
        let message = "Please Update Me!";
        return (
            <ChildUpdate point={this.state.point} update={this.updateMe} msg={message}/>
        );
    }
}

function ButtonClickable(props){
    return (
        <div style={{ margin: '25px', textAlign: 'center', fontSize: '20px' }}>
            <span id='me'> {props.data.point} </span><br />
            <button onClick={props.data.update}> {props.data.msg} </button>
        </div>
    ); 
}

function ButtonNotClickable(props){
    return (
        <div style={{ margin: '25px', textAlign: 'center', fontSize: '20px' }}>
            <span id='me'> {props.point} </span><br />
            <button> Not Functional </button>
        </div>
    );
}

class ChildUpdate extends React.Component{
    constructor(props){
        super(props);
        console.log('ChildUpdate Constructor');
    }

    render(){
        
        if(this.props.point % 2 == 0){
            return ( <ButtonClickable data={this.props} /> );
        }else{
            return ButtonNotClickable(this.props);
        }
        
        
    }
}


export default App;
