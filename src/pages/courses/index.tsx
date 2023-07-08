import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, Props as CoursesProps } from "state/slices/courses";

const Courses = () => {
  const dispatch = useDispatch();
  const fetchPending = useSelector(
    (state: CoursesProps) => state.courses.fetchPending
  );

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div>
      {fetchPending ? (
        <div>Loading</div>
      ) : (
        <Switch>
          {/* Onsites */}
          {/* Where locationId === "capetown" or "johannesburg" etc.
           * That way if you got more courses and wanted to create a
           * page that lists them all in one location you wouldn't
           * have to add a route per location. */}
          <Route path="/courses/onsite/:locationId/software-bootcamp">
            <div></div>
          </Route>
          <Route path="/courses/onsite/:locationId/fullstack-bootcamp">
            <div></div>
          </Route>

          {/* Onlines */}
          {/* Universities */}
          {/* Where universityId === "stellenbosch-university" or "johannesburg-university" etc.
           * That way if you got more courses and wanted to create a
           * page that lists them all from one university you wouldn't
           * have to add a route per university. */}
          <Route path="/courses/university/:universityId/sun-web-development">
            <div></div>
          </Route>
          <Route path="/courses/university/:universityId/sun-software-engineering">
            <div></div>
          </Route>
          <Route path="/courses/university/:universityId/sun-data-science">
            <div></div>
          </Route>
          {/* Bootcamps */}
          <Route path="/courses/bootcamps/immersive">
            <div></div>
          </Route>
          <Route path="/courses/bootcamps/software-engineering">
            <div></div>
          </Route>
          <Route path="/courses/bootcamps/data-science">
            <div></div>
          </Route>
          <Route path="/courses/bootcamps/web-development">
            <div></div>
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default Courses;
