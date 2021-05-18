import { Button, LinearProgress } from "@material-ui/core";
import React, { Suspense, useEffect } from "react";
import "./App.css";
import HandleUpdate from "./components/HandleUpdate";
import ServiceWorkerProvider from "./components/ServiceWorkerProvider/ServiceWorkerProvider";
import processNotification from "./utils/handleNotifications";
import TodoList from "./views/TodoList/TodoList";

// const TodoListComponent = React.lazy(() => import("./views/TodoList/TodoList"));

const App: React.FC = () => {
  const buttonClick = () => {
    processNotification("Notification Success", {
      body: "Here is a notification body",
    });
  };
  return (
    <div className="App">
      <ServiceWorkerProvider>
        <TodoList />
        <HandleUpdate />
        <Button onClick={buttonClick}>Notify-8</Button>
      </ServiceWorkerProvider>
    </div>
  );
};

export default App;
