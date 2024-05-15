import { useState } from 'react'
import './App.css'

function App() {
  const [list,setList]=useState([]);
  const [task,setTask]=useState("");
  const handleTask=(e)=>{
    setTask(e.target.value);
  };
  const handleCreate=()=>{
    let newList=[...list,task];
    setList(newList);
    setTask();
  }
  const handleDelete=(id)=>{
    let newList=list.filter((element,i)=>{
      if(id!=i){
        return element;
      }
    });
    setList(newList);
  }
  const handleUpdate=(newTask,id)=>{
    let newList=list.map((element,i)=>{
      if(id==i){
        return newTask;
      }
      else{
        return element;
      }
    });
    setList(newList);
  }
  return (
    <>
    <h1>TO DO LIST</h1>
    <input type="text" value={task} onChange={(event)=>handleTask(event)} placeholder='Type Here'/>
      <button onClick={handleCreate}>Add Item</button>
       <h1>{task}</h1>
      <div className='container'>
          { list && list.map((task,index)=> { 
            return (<div key={index} className='task-div'>
              <input onChange={(e)=>handleUpdate(e.target.value,index)} value={task}></input>
               <button onClick={()=>handleDelete(index)}>Delete Item</button>
          </div>)
          }) }
      </div>
    </>
     
  )

}

export default App
