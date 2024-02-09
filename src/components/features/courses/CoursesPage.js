import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as courseActions from "../courses/redux//courseActions";
import * as authorActions from "../courses/redux/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { toast } from "react-toastify";
import Button from "../ui/Button";

const CoursesPage = () => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  const dispatch = useDispatch();

  // Using useSelector to access the Redux store's state
  const { courses, authors, loading } = useSelector((state) => ({
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => ({
            ...course,
            authorName: state.authors.find((a) => a.id === course.authorId)
              .name,
          })),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  }));

  // Equivalent to componentDidMount
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(courseActions.loadCourses()).catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors()).catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [dispatch, courses.length, authors.length]);

  const handleDeleteCourse = async (course) => {
    toast.success("Course deleted");
    try {
      await dispatch(courseActions.deleteCourse(course));
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  return (
    <>
      {redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Button
            text="Add Course"
            onClick={() => setRedirectToAddCoursePage(true)}
            className="btn-primary add-course" // Now you can pass "btn-primary" or any other classes
          />

          <CourseList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CoursesPage;
