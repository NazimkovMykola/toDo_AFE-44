import { TextField, Paper, Checkbox, Tooltip } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

const ToDoItem = ({ todo }) => {
  const { id, name, isDone } = todo
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
        <Checkbox id={id} checked={isDone} />
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
        <IconButton aria-label="delete" size="large">
          <DeleteIcon id={id} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}

export default ToDoItem
