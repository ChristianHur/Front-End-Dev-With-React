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