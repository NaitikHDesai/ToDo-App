import axios from 'axios';

const basicURL="http://localhost:5000";
const getAllToDo=(setToDo)=>{
    axios
    .get(basicURL)
    .then(({data})=>{
        console.log("data->",data);
        setToDo(data);
    })
}

const addTodo=(text,setText,setToDo)=>{
    axios
    .post(`${basicURL}/save`,{text})
    .then((data)=>{
        console.log("data")
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=>console.log(err));
}

const updateToDo=(ToDoId,text,setToDo,setText,setIsUpdating)=>{
    axios
    .post(`${basicURL}/update`,{_id:ToDoId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    
    .catch((err)=>console.log(err));
}

const deleteToDo=(_id,setToDo)=>{
    axios
    .post(`${basicURL}/delete`,{_id})
    .then((data)=>{
        getAllToDo(setToDo)
    })
    
    .catch((err)=>console.log(err));
}
export {getAllToDo,addTodo,updateToDo,deleteToDo};