import { LinearProgress } from "@material-ui/core";
import React, { Suspense } from "react";
import "./App.css";

const TodoListComponent = React.lazy(() => import("./views/TodoList/TodoList"));

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<LinearProgress />}>
        <TodoListComponent />
      </Suspense>
    </div>
  );
};

export default App;
