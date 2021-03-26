import { Switch, Route } from "react-router-dom";
import { Navbar } from "../../components";
import {
  GettingStarted,
  Avatar,
  Alert,
  Badge,
  Button,
  Card,
  Input,
  List,
  Modal,
  Rating,
} from "../../lib";
import styles from "./Documentation.module.css";

export default function Documentation() {
  const routes = [
    {
      path: "/docs/avatar/",
      component: Avatar,
    },
    {
      path: "/docs/alert/",
      component: Alert,
    },
    {
      path: "/docs/badge/",
      component: Badge,
    },
    {
      path: "/docs/button/",
      component: Button,
    },
    {
      path: "/docs/card/",
      component: Card,
    },
    {
      path: "/docs/input/",
      component: Input,
    },
    {
      path: "/docs/list/",
      component: List,
    },
    {
      path: "/docs/modal/",
      component: Modal,
    },
    {
      path: "/docs/rating/",
      component: Rating,
    },
    {
      path: "/docs",
      component: GettingStarted,
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className={styles.docContent}>
        <Switch>
          {routes.map((route) => {
            return (
              <Route key={route.path} exact path={route.path}>
                <route.component />
              </Route>
            );
          })}
        </Switch>
      </div>
    </div>
  );
}
