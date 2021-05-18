import {
  BottomNavigation,
  Button,
  Hidden,
  LinearProgress,
  Paper,
} from "@material-ui/core";
import React, { Suspense, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HandleUpdate from "./components/HandleUpdate";
import ServiceWorkerProvider from "./components/ServiceWorkerProvider/ServiceWorkerProvider";
import processNotification from "./utils/handleNotifications";
import TodoList from "./views/TodoList/TodoList";
import BottomNav from "./components/BottomNav/BottomNav";

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
        <NavBar />
        <TodoList />
        <HandleUpdate />
        <BottomNav />
      </ServiceWorkerProvider>
    </div>
  );
};

export default App;
