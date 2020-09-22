import React from 'react';
import './style.css'

class Homepage extends React.Component{
    render(){
        const username = "number 1 dev";
        return(
            <div>
                <h1 className="title"> Hello: <span className="underline">{username}</span></h1>
                <h3 className="desc">Here are your Daily Analytics.</h3>
            </div>
        );
    }
}



export default Homepage;