'use client'
import { useEffect, useState } from "react"
import { TaskList } from './components/taskList/tasklist.jsx'
import { FetchTodo } from './components/data/fetchtodo.jsx'

export default function Home(){

  const a = '20:12:39'
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    FetchTodo({method : 'get', setTab : setTasks})
  }, [])
   
  
  
  return(
    <body className='w-full h-80 bg-cover bg-center bg-no-repeat' style={{backgroundImage:'url("/todoBg1.jpeg")'}}>
      <div className="flex justify-center">
        <table className="mt-24">
          <thead>
            <tr className="bg-deepViolet">
              <th className="hover:underline underline-offset-4 h-12 text-slate-900">
                Tâches
              </th>
              <th className="hover:underline underline-offset-4 text-slate-900">
                Date de création
              </th>
              <th className="hover:underline underline-offset-4 text-blue-950">
                Deadline
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 && <TaskList tasks={tasks} />}
            {console.log(tasks)}
          </tbody>
        </table>
      </div>
    </body>
  )
}
