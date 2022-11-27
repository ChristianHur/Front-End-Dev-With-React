import React from 'react';

class App extends React.Component {

    numbers = [12,23,34];

    render() {
        //li = this.numbers.map( (n,i) => <li key={i}>{n}</li>);
        const li = [];
        // this.numbers.forEach( (n,i) => {
        //     li.push(<li key={i}>{n}</li>);
        // });
        for(let i=0;i<this.numbers.length;i++){
            li.push(<li key={i}>{this.numbers[i]}</li>);
        }

        return (
            <div style={{ margin: '25px', textAlign: 'center', fontSize: '20px' }}>
                <ul style={{listStyleType:'none'}}>
                    { li }
                </ul>
            </div>
        );
    }
}

export default App;