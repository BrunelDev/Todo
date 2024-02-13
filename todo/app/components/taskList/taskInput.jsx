import { useState } from 'react'
import { BadgePlus } from 'lucide-react'

export function TaskInput({dispatch, index}){
  const [taskName, setTaskName] = useState(undefined)
  const [creationDate, setCreationDate] = useState(undefined)
  const [deadline, setDeadline] = useState(undefined)

  function createNewTask(){
    dispatch({
      type: 'ADD_ONE',
      payload: {
        task: {
          taskName: taskName,
          creationDate: creationDate,
          deadline: deadline
        },
        index: index
      }
    })
  }

  return(
    <tr className="">
      <td>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-l-deepViolet rounded-md focus:outline-orange-500"
        />
      </td>
      <td>
        <input
          type="text"
          value={creationDate}
          onChange={(e) => setCreationDate(e.target.value)}
          className="border border-l-deepViolet rounded-md focus:outline-orange-500"
        />
      </td>
      <td>
        <input
          type="text"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border  enabled:outline-red-700 rounded-md focus:outline-orange-500"
        />
      </td>
      <td>
        <button type="button" onClick={createNewTask}>
          <BadgePlus size={28} color="#A48CC0" strokeWidth={3} absoluteStrokeWidth />
        </button>
      </td>
    </tr>
  )
}
