"use client"
import { Trash2, PlusCircle } from 'lucide-react'
import { useState, useReducer } from 'react'
import { TaskInput } from "./taskInput.jsx"

export function TaskList({tasks}) {
  const [state, dispatch] = useReducer(reducer, {todo:tasks})

  function reducer(state, action){
    if (action.type === 'SHOW_ACTIONS'){
      return (
        {...state,
          todo : state.todo.map(task => task === action.payload ? {...task, show: !task.show} : task)
        }
      )
    }
    if(action.type === "DELETE_ONE"){
      return {
        ...state,
        todo : state.todo.filter(task => task !== action.payload)
      }
    }
    if(action.type === 'ADD_INPUT'){
      let updatedlist = [...state.todo]
      updatedlist.splice(action.payload.index + 1, 0, action.payload.input)
      return {
        ...state,
        todo: [...updatedlist]
      }
    }
    if(action.type === 'ADD_ONE'){
      let update = state.todo.slice()
      update.splice(action.payload.index, 1, action.payload.task)
      return {
        ...state,
        todo: update
      }
    }
    return state
  }

  return (
    <>
      {console.log(state.todo)}
      {state.todo.map((task, index) => {
        if(task.type === TaskInput){
          return task
        }
        else {
          return (
            <tr key={index} className="even:bg-violetta odd:bg-slate-50 my-96 ">
              <td className="h-12 pr-40 pl-10" onClick={() => {dispatch({type: "SHOW_ACTIONS", payload: task})}}>{task.taskName}</td>
              <td className="h-12 pr-40 pl-10" onClick={() => {dispatch({type: "SHOW_ACTIONS", payload: task})}}>{task.creationDate}</td>
              <td className="h-12 pr-40 pl-10" onClick={() => {dispatch({type: "SHOW_ACTIONS", payload: task})}}>{task.deadline}</td>
              {task.show && <span>
                <button type="button" onClick={() => {
                  dispatch({type: "ADD_INPUT", payload: {index: index, input: <TaskInput dispatch={dispatch} index={index+1}/>}})
                }}>
                  <PlusCircle size={28} color="#04c311" strokeWidth={1.5} />
                </button>
                <button type="button" onClick={() => dispatch({type:'DELETE_ONE', payload: task})}>
                  <Trash2 size={28} color="#f20202" strokeWidth={1.5} />
                </button>
              </span>}
            </tr>
          )
        }       
      })}
    </>
  )
}
