import { SideNav } from "components/navigation/index";
import React, { useMemo } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Props, CourseProps } from "state/slices/courses";
import styled from "styled-components/macro";
import { useToggle } from "react-use";

const StyledCoursesGrid = styled.div`
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  z-index: 0;
  position: relative;
`;

const StyledPageContainer = styled.div`
  width: 80%;
  padding: 50px;
  overflow: auto;
  z-index: 0;
  position: relative;

  @media (max-width: 60em) {
    width: 100%;
  }
`;

const CourseSlot = styled(Link)`
  border-radius: var(--radii-small);
  box-shadow: var(--shadow-elevated);
  text-decoration: none;
  positon: relative;
  z-index: 0;

  :hover {
    transform: scale(1.02);
  }

  .header {
    background-color: var(--dark-blue);
    border-radius: var(--radii-small) var(--radii-small) 0 0;
    color: var(--white);
    text-decoration: none;
    font-size: var(--medium);
    text-align: center;
    font-weight: 700;
    font-family: var(--MontserratExtraBold);
    padding: 25px;
    z-index: 0;
  }
`;

const HomePage = () => {
  const [showOnline, updateShowOnline] = useToggle(true);
  const courses = useSelector((state: Props) => state.courses.courses);

  const getCourseLink = (course: CourseProps, id: string) => {
    let link = `/hyperion-dev/courses/${id}/`;
    const { id: courseId, location } = course;
    if (showOnline) {
      if (location) {
        link += `${location}/`;
      }
      link += courseId;
    }
    return link;
  };

  return (
    <StyledPageContainer className="scrollbar">
      <div className="header"></div>
      {courses
        .filter(({ online }) => showOnline === online)
        .map(({ label, info, courses, id }) => (
          <div>
            <div>{label}</div>
            <div>{info}</div>
            <StyledCoursesGrid>
              {courses.map((course) => (
                <CourseSlot to={getCourseLink(course, id)}>
                  <div className="header">{course.label}</div>
                  <div>{course.info}</div>
                  <div className="footer"></div>
                </CourseSlot>
              ))}
            </StyledCoursesGrid>
          </div>
        ))}
      <div className="footer"></div>
    </StyledPageContainer>
  );
};

export default HomePage;
