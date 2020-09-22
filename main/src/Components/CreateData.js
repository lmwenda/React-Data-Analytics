import React, {useState} from 'react';
import './style.css';

class CreateData extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'null.'}
        this.submit = alert("Form Data is: " + this.state.value)
    }
    render(){
        // Data Handling
        // const [data, setData] = useState(null);

        return(
            <form className="addData" onSubmit={this.submit}>
                <input type="text" placeholder="Month:" />
                <input type="text" placeholder="Money:"/>
                <input type="submit" value="Update Chart" />
            </form>
        );
    }
}

export default CreateData;