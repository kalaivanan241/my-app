import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import Header from "../../components/Header";
import classnames from "classnames";

import DeleteIcon from "@material-ui/icons/Delete";

export interface TodoListProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    doneTodo: {
      textDecoration: "line-through",
    },
    listItem: {
      cursor: "pointer",
    },
    root: {
      minWidth: 345,
      width: "30%",
      margin: "10rem auto",
      background: grey[200],
    },
  })
);

type TodoType = {
  id: string;
  todo: string;
  isDone: boolean;
};

const TodoList: React.FC<TodoListProps> = () => {
  const classes = useStyles();
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (todo.trim().length === 0) {
      setError("Todo cannot be blank");
      return;
    }
    setTodos((preValue) => [
      ...preValue,
      { id: Date.now().toString(), todo: todo, isDone: false },
    ]);
    setTodo("");
  };

  const onTodoClick = (selectedTodo: TodoType) => {
    const index = todos.findIndex((todo) => selectedTodo.id === todo.id);
    todos.splice(index, 1, {
      ...selectedTodo,
      isDone: !selectedTodo.isDone,
    });
    setTodos([...todos]);
  };

  const onDelete = (selectedTodo: TodoType) => {
    const index = todos.findIndex((todo) => selectedTodo.id === todo.id);
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  return (
    <>
      <Header
        title="Todo List"
        description="Create todo and save it in local storage"
      />
      <Card className={classes.root}>
        <CardHeader title="Create Todo" />
        <CardContent>
          <form onSubmit={addTodos}>
            <TextField
              variant="outlined"
              label="Todo"
              fullWidth
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              helperText={!!error ? error : ""}
              error={!!error}
            />
          </form>
          <List>
            {todos.map((t) => (
              <>
                <ListItem
                  onClick={() => onTodoClick(t)}
                  key={t.id}
                  className={classes.listItem}
                >
                  <ListItemText
                    primary={t.todo}
                    className={classnames({ [classes.doneTodo]: t.isDone })}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => onDelete(t)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default TodoList;
