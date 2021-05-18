import { Button, LinearProgress } from "@material-ui/core";
import React, { Suspense, useEffect } from "react";
import "./App.css";
import processNotification from "./utils/handleNotifications";

const TodoListComponent = React.lazy(() => import("./views/TodoList/TodoList"));

const App: React.FC = () => {
  const buttonClick = () => {
    processNotification("Notification Success", {
      body: "Here is a notification body",
    });
  };
  return (
    <div className="App">
      <Suspense fallback={<LinearProgress />}>
        <TodoListComponent />
        <Button onClick={buttonClick}>Handle Notification</Button>
      </Suspense>
    </div>
  );
};

export default App;
