 const getText = (req,res)=>{
    res.send("Welcome to crud App")
}

const getAllData = (req,res)=>{
    res.json([{
        id:1,
        text:"Code"
    }])
}

const createTodo = (req,res)=>{
    res.send("Todo is Created")
}
const updateTodo = (req,res)=>{
    res.send('Todo is Updated')
}

const deleteTodo = (req,res)=>{
    res.send('Todo is Deleted')
}
module.exports = {getText,getAllData,createTodo,updateTodo,deleteTodo}