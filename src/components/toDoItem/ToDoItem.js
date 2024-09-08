import { TextField, Paper, Checkbox, Tooltip } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

const ToDoItem = ({ todo, setTodo }) => {
  const { id, name, isDone } = todo

  const deleteTodo = (e) => {
    setTodo((previousState) => {
      const newState = previousState.filter((el) => el.id != e.target.id)
      localStorage.setItem("todo", JSON.stringify(newState))
      return newState
    })
  }

  const changeStatus = (e) => {
    const id = e.target.id
    setTodo((previousState) => {
      const newState = [...previousState]

      newState.map((el) => {
        if (el.id == id) {
          el.isDone = !el.isDone
          return el
        }
      })
      localStorage.setItem("todo", JSON.stringify(newState))
      return newState
    })
  }
  // контрольовані компоненти і неконтрольовані компоненти
  return (
    <Paper
      sx={{
        p: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "500px",
        marginBottom: "20px",
      }}
      elevation={10}
    >
      <Tooltip title="Позначити як виконана">
        <Checkbox onClick={changeStatus} id={id} checked={isDone} />
      </Tooltip>
      <Tooltip title="Назва справи">
        <TextField
          sx={{ width: "300px" }}
          value={name}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
          id="filled-basic"
          label="Справа"
          variant="filled"
        />
      </Tooltip>

      <Tooltip title="Видалити справу">
        <IconButton
          id={id}
          onClick={deleteTodo}
          aria-label="delete"
          size="large"
        >
          <DeleteIcon id={id} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}

export default ToDoItem
