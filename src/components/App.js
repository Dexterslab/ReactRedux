import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/features/home/HomePage";
import AboutPage from "../components/features/about/AboutPage";
import Header from "../components/layout/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "../components/features/courses/CoursesPage";
import ManageCoursePage from "../components/features/courses/ManageCoursePage"; // eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
