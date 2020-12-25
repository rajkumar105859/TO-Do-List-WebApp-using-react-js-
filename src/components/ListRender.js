import React, { useState } from 'react'
import './style.css'

function ListRender(props){
    
    return(
        <>
        <div  className="todo_style">
        
        <li>{props.itemVal}</li>
        <i className="material-icons" style={{fontSize:'2rem'} }
               onClick={ ()=>{
            props.onSelect(props.id)
        }}>delete_forever</i>
        </div>
        </>
    )
}

export default ListRender