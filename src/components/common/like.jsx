import React, { Component } from 'react';

// Input liked : boolean 
// Output : onClick (dom component responsible for rendering empty or full heart)


class Like extends Component{
    render(){
     return(<i className="fa fa-heart-o" aria-hidden="true"></i>
        )
    }
}

export default Like;
