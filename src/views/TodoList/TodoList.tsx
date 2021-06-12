import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
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
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import classnames from "classnames";

import DeleteIcon from "@material-ui/icons/Delete";
import processNotification from "../../utils/handleNotifications";
import { db } from "../../configs/db";
import { TodoType } from "./types";
import AddIcon from "@material-ui/icons/Add";
import useFirebaseServices from "./../../hooks/useFirebaseServices";

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
      margin: "auto",
      background: grey[200],
      marginTop: "2rem",
    },
    listStyle: {
      maxHeight: "350px",
      overflow: "scroll",
    },
  })
);

const TodoList: React.FC<TodoListProps> = () => {
  const classes = useStyles();
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const {
    loading,
    getData: getTodos,
    addData,
    updateData,
    deleteData,
  } = useFirebaseServices<TodoType>("todos");

  const getData = async () => {
    const todosList = await getTodos();
    setTodos([...todosList]);
  };

  useEffect(() => {
    getData();
  }, []);

  const addTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (todo.trim().length === 0) {
      setError("Todo cannot be blank");
      return;
    }
    addData({ id: Date.now().toString(), todo: todo, isDone: false });
    setTodos((preValue) => [
      ...preValue,
      { id: Date.now().toString(), todo: todo, isDone: false },
    ]);
    processNotification("Task added", { body: todo });
    setTodo("");
  };

  const onTodoClick = (selectedTodo: TodoType) => {
    const index = todos.findIndex((todo) => selectedTodo.id === todo.id);
    todos.splice(index, 1, {
      ...selectedTodo,
      isDone: !selectedTodo.isDone,
    });
    updateData({ ...selectedTodo, isDone: !selectedTodo.isDone });
    setTodos([...todos]);
  };

  const onDelete = (selectedTodo: TodoType) => {
    const index = todos.findIndex((todo) => selectedTodo.id === todo.id);
    todos.splice(index, 1);
    setTodos([...todos]);
    deleteData(selectedTodo);
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

          {!loading ? (
            <List className={classes.listStyle}>
              {todos.length > 0 &&
                todos.map((t) => (
                  <React.Fragment key={t.id}>
                    <ListItem
                      onClick={() => onTodoClick(t)}
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
                  </React.Fragment>
                ))}
            </List>
          ) : (
            <CircularProgress />
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default TodoList;
