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
          {/* <Route path="/hyperion-dev/courses/onsite/"/> */}
          {/* Where locationId === "capetown" or "johannesburg" etc.
           * That way if you got more courses and wanted to create a
           * page that lists them all in one location you wouldn't
           * have to add a route per location. */}
          {/* <Route path="/hyperion-dev/courses/onsite/:locationId/"/> */}
          <Route path="/hyperion-dev/courses/onsite/:locationId/software-bootcamp">
            <div>Onsite software bootcamp</div>
          </Route>
          <Route path="/hyperion-dev/courses/onsite/:locationId/fullstack-bootcamp">
            <div>Onsite fullstack bootcamp</div>
          </Route>

          {/* Onlines */}
          {/* Universities */}
          {/* <Route path="/hyperion-dev/courses/university/"/> */}
          {/* Where universityId === "stellenbosch-university" or "johannesburg-university" etc.
           * That way if you got more courses and wanted to create a
           * page that lists them all from one university you wouldn't
           * have to add a route per university. */}
          {/* <Route path="/hyperion-dev/courses/university/:universityId/"/> */}
          <Route path="/hyperion-dev/courses/university/:universityId/sun-web-development">
            <div>Online university web development</div>
          </Route>
          <Route path="/hyperion-dev/courses/university/:universityId/sun-software-engineering">
            <div>Online university software engineering</div>
          </Route>
          <Route path="/hyperion-dev/courses/university/:universityId/sun-data-science">
            <div>Online university data science </div>
          </Route>
          {/* Bootcamps */}
          {/* <Route path="/hyperion-dev/courses/bootcamps/"/> */}
          <Route path="/hyperion-dev/courses/bootcamps/immersive">
            <div>Online fullstack bootcamp</div>
          </Route>
          <Route path="/hyperion-dev/courses/bootcamps/software-engineering">
            <div>Online software engineering bootcamp</div>
          </Route>
          <Route path="/hyperion-dev/courses/bootcamps/data-science">
            <div>Online data science bootcamp</div>
          </Route>
          <Route path="/hyperion-dev/courses/bootcamps/web-development">
            <div>Online web development bootcamp</div>
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default Courses;
