"use client"
import { Trash2, PlusCircle } from 'lucide-react'
import { useState, useReducer } from 'react'
import { TaskInput } from "./taskInput.jsx"


export function TaskList({tasks}) {

function reducer(state, action){
  if (action.type === 'SHOW_ACTIONS'){
    return(
      {...state,
      todo : state.todo.map(task => task === action.payload ? {...task, show: !task.show}: task)
      }
    )
  }
  if(action.type ==="DELETE_ONE"){
    return{
      ...state,
      todo : state.todo.filter(task=>task !== action.payload)
    }
  }
  if(action.type === 'ADD_ONE'){
    let updatedlist = [...state.todo]
    updatedlist.splice(action.payload+1, 0, <TaskInput/>)
    return {
      ...state,
      todo: [...updatedlist]
  }
  
}
return state
}


const [state, dispatch] = useReducer(reducer, {todo:tasks})
const [add, setAdd] = useState(false)

    return(
      <> {console.log(state.todo)}
        {state.todo.map((task, index) => {
          if(task.type === TaskInput){
            console.log(<TaskInput/>)
            console.log("ok")
            return task
          }
          else{
            return(
          
          <tr key={index} className="even:bg-violetta odd:bg-slate-50 my-96 ">
            <td className="h-12 pr-40 pl-10" onClick={()=>{dispatch({type: "SHOW_ACTIONS", payload: task})}}>{task.taskName}</td>
            <td className="h-12 pr-40 pl-10" onClick={()=>{dispatch({type: "SHOW_ACTIONS", payload: task})}}>{task.creationDate}</td>
            <td className="h-12 pr-40 pl-10" onClick={()=>{dispatch({type: "SHOW_ACTIONS", payload: task})}}>{task.deadline}</td>
            
            {task.show && <span className='bg-red-500'>
              <button type="button" className='bg-red-500' onClick = {()=>{dispatch({type: "ADD_ONE", payload: index})
            console.log(task)}}><PlusCircle size={28} color="#04c311" strokeWidth={1.5} /></button>
              <button type="button" className='bg-red-500' onClick={()=>dispatch({type:'DELETE_ONE', payload: task})}><Trash2 size={28} color="#f20202" strokeWidth={1.5} /></button>
            </span>}
            </tr>)
          }
            
           
          
          
})}
      </>
    ) }