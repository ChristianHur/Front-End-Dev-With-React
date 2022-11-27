import React from 'react';

function App(props){
    function test(){
        console.log("HI");
    }
    return(
        <Sup test={test}></Sup>
    )
}

function Sup(props){
    return(
        <h1>
            <button onClick={props.test}>TEST</button>
        </h1>
    )
}

export default App;