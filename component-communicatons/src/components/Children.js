//Child A
const ChildA = (props) => {
    const update=(event)=>{
        let data = event.target.value
        props.updateChild(data.toUpperCase());
    }
    return (
        <div>
            <fieldset>
                <legend>Child A</legend>
                <p>Parent: [ {props.parentData} ]</p>
                <input onChange={update}/>
            </fieldset>
        </div>
    );
}


//Child B
const ChildB = (props) => {
    return (
        <div>
            <fieldset>
                <legend>Child B</legend>
                <p>Parent: [ {props.parentData} ]</p>
                <p>Child A: [{props.childData} ]</p>
            </fieldset>
        </div>
    )
}

export { ChildA, ChildB }