import { useState } from "react"
import "./App.css"
import { TextField, Button, Paper } from "@mui/material"
import ToDoItem from "./components/toDoItem/ToDoItem"

function App() {
  const [todoList, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  )

  const addNewTodo = () => {
    if (document.querySelector("#outlined-basic").value) {
      const newTodo = [...todoList]
      const newName = document.querySelector("#outlined-basic").value
      newTodo.push({ id: todoList.length + 1, name: newName, isDone: false })
      setTodo(newTodo)
      localStorage.setItem("todo", JSON.stringify(newTodo))
      document.querySelector("#outlined-basic").value = ""
    }
  }

  return (
    <div className="App">
      <h1>Список справ</h1>
      <Paper
        sx={{
          p: "16px",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
        elevation={10}
      >
        <TextField
          id="outlined-basic"
          label="Назва справи"
          variant="outlined"
          sx={{ mr: "10px" }}
        />
        <Button onClick={addNewTodo} variant="contained">
          Додати справу
        </Button>
      </Paper>
      <Paper
        elevation={10}
        sx={{
          padding: "16px",
          overflowY: "scroll",
          height: "356px",
          width: "580px",
        }}
      >
        {todoList.map((todo) => {
          return <ToDoItem setTodo={setTodo} todo={todo} />
        })}
      </Paper>
    </div>
  )
}

export default App

// розумні і тупі{глупі} компоненти
