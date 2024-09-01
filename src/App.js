import "./App.css"
import { TextField, Button, Paper } from "@mui/material"
import ToDoItem from "./components/toDoItem/ToDoItem"

function App() {
  const todoList = [
    {
      name: "Перша справа",
      id: 1,
      isDone: true,
    },
    {
      name: "Друга справа",
      id: 2,
      isDone: false,
    },
    {
      name: "Третя справа",
      id: 3,
      isDone: true,
    },
  ]
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
        <Button variant="contained">Додати справу</Button>
      </Paper>
      <Paper elevation={10} sx={{ padding: "16px" }}>
        {todoList.map((todo) => {
          return <ToDoItem todo={todo} />
        })}
      </Paper>
    </div>
  )
}

export default App

// розумні і тупі{глупі} компоненти
