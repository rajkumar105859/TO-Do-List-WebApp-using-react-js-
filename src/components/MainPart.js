import React, { useState } from 'react'
import ListRender from './ListRender';
import './style.css'

function MainPart(){
    const myFF = ()=>{
        console.log("DSSSS")
    }
    const [inputList , setInputList] = useState("");
    const [Items , setItems] = useState([])
    const itemEvent = (event)=>{
        setInputList(event.target.value)
    }
    const listOfitems = ()=>{
        setItems((oldItems)=>{
            return [
                    ...oldItems ,
                    inputList
            ]
        })
        setInputList("");
    }
    const deleteItems = (id)=>{
        console.log('deleted')
        setItems((oldItem)=>{
            return oldItem.filter((arrdata , index)=>{
                return index !== id ;


            })

        })
    }

    return(
        <>
        <div className="main_div">
           <div className="center_div">
              <br/>
               <h1>ToDo List WebApp @ <span style={{color:'red'}}>Rajkumar</span></h1>
               <br/>
               
               <input type='text' placeholder="Add a Item" value={inputList} onChange={itemEvent}></input>
               <button onClick={listOfitems} className="btn">+</button>
               <ol>
                   {/* <li>{inputList}</li> */}
                   {
                       Items.map((itemVal ,index)=>{
                           return <ListRender key={index} id={index} itemVal={itemVal}
                           onSelect={deleteItems}></ListRender>
                       })
                   }
               </ol>

                
           </div>
            
        </div>
        </>
    )
}

export default MainPart