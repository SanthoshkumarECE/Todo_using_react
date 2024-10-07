import React,{useState} from 'react'
function Todolist()
{    
    const [tasks, setTask] = useState(["Eat five star","Do nothing","call sandy"]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event)
    {
            setNewTask(event.target.value);
    }
    function addTask()
    {  if(newTask.trim() !== ""){
       setTask(t => [...t,newTask]);
       setNewTask("");}
    }
    function deleteTask(index)
    {
        const updated = tasks.filter((_,i) => i !== index);
        setTask(updated); 
    }
    function moveTaskUp(index)
    {  if(index > 0){
       const updated = [...tasks];
       [updated[index - 1],updated[index]] = 
       [updated[index],updated[index - 1]]
       setTask(updated);
    }
    }
    function moveTaskDown(index)
    {
        if(index < tasks.length - 1){
            const updated = [...tasks];
            [updated[index + 1],updated[index]] = 
            [updated[index],updated[index + 1]]
            setTask(updated);
         }
    }
    return(<div className="todo-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                       placeholder='Enter a task'
                       value={newTask}
                       onChange={handleInputChange} />
                <button className='add' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index) => <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='Delete' 
                            onClick={() => deleteTask(index)}>
                            Delete</button>
                    <button className='move' 
                            onClick={() => moveTaskUp(index)}>
                            ⬆️</button>
                    <button className='move' 
                            onClick={() => moveTaskDown(index)}>
                            ⬇️</button>
                </li>)}
            </ol>
           </div>);
}
export default Todolist
