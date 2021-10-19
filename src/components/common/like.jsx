import React from 'react';

// Input liked : boolean 
// Output : onClick (dom component responsible for rendering empty or full heart)

const Like = props =>{
    let classes = "fa fa-heart";
    if(props.liked) classes += "-o";
    return(
    <i 
    onClick={props.onClick}
     style={{cursor:"pointer"}}
      className={classes} 
      aria-hidden="false">
       
      </i>
    ) 
}
export default Like;
