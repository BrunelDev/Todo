'use client'
import { Fragment, useState } from "react"
import { TaskList } from './components/taskList/tasklist.jsx'
import { TaskInput } from "./components/taskList/taskInput.jsx" 

export default function Home(){

  const a = '20:12:39'
  const [tasks, setTasks] = useState([{
    taskName: "Chier",
    creationDate: a,
    deadline: "Demain",
    show: false,
    showNext : false

  },{
    taskName: "Chier",
    creationDate: a,
    deadline: "Demain",
    show: false,
    showNext : false
  },{
    taskName: "Chier",
    creationDate: a,
    deadline: "Demain",
    show: false,
    showNext : false
  },{
    taskName: "Chier",
    creationDate: a,
    deadline: "Demain",
    show: false,
    showNext : false
  },{
    taskName: "Chier",
    creationDate: a,
    deadline: "Demain",
    show: false,
    showNext : false
  },
  {
    taskName: "Chier",
    creationDate: a,
    deadline: "Demain",
    show: false,
    showNext : false
  }
])
  
  const [Add, setAdd] = useState(false)
  
  function addTask(){
    return(
      <tr className="odd:bg-white even:bg-slate-50">
        <td>
          <input type="text" className="border border-x-blue-200 rounded-md focus:outline-orange-500"/>
        </td>
        <td>
          <input type="text" />
        </td>
        <td>
          <input type="text" />
        </td>
    
      </tr>
    )
  }

  return(
    <body style={{backgroundImage:'url("/todoBg1.jpeg")'}}>
    <div className="pl-96">
      <table className="ml-24 mt-12">
        <thead>
          <tr className="bg-deepViolet">
          <th>
            Tâches
          </th>
          <th>
            Date de création
          </th>
          <th>
            Deadline
          </th>
          </tr>
          
        </thead>
        <tbody>
          <TaskList tasks={tasks}/>
        </tbody>
      </table>
    </div>
    </body>
      
  )
}
