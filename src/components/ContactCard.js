import React from "react";


const ContactCard = (props) =>{

    const {id,name,email} = props.contact;

    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="trash alternate outline icon right aligned" 
            onClick = {()=> props.clickHandler(id)}
            style={{color:"red",marginTop:"7px"}}></i>
        </div>
        </div>
    );
}

export default ContactCard;