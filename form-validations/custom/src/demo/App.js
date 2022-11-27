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
