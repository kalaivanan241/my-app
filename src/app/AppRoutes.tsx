import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { baseUrl, savingUrl, todoListUrl } from "./paths";
const TodoListComponent = React.lazy(
  () => import("./../views/TodoList/TodoList")
);
const HomeComponent = React.lazy(() => import("./../views/Home/Home"));
const SavingsComponent = React.lazy(
  () => import("../views/SavingsList/Savings")
);

const AppRoutes: React.FC = () => {
  return (
    <Box mb={2}>
      <React.Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path={baseUrl} component={HomeComponent} exact />
          <Route path={todoListUrl} component={TodoListComponent} />
          <Route path={savingUrl} component={SavingsComponent} />
        </Switch>
      </React.Suspense>
    </Box>
  );
};

export default AppRoutes;
