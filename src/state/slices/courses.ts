import { createSlice } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";

// import {
//   fetchCourses,
// } from "api/courses";
import { StrictAction } from "types/index";
import { COURSE_MAP } from "constants/index";

export interface CourseProps {
  id: string;
  part_time: number | null;
  full_time: number | null;
  label: string;
  info: string;
  popular?: boolean;
  location?: string;
}

export interface CoursesState {
  id: string;
  label: string;
  info: string;
  online: boolean;
  courses: Array<CourseProps>;
}

interface State {
  courses: Array<CoursesState>;
  fetchPending: boolean;
  error: any | null;
}

export interface Props {
  courses: State;
}

export const courses: State = {
  // The default would be below
  // courses: new Array<CoursesState>(),
  courses: COURSE_MAP,
  fetchPending: false,
  error: null,
};

export const slice = createSlice({
  name: "courses",
  initialState: courses,
  reducers: {
    getCourses: (draft) => {
      draft.fetchPending = true;
      draft.error = null;
    },
    getCoursesSuccess: (draft, { payload }) => {
      // Set courses prop after it's fetched successfully
      // draft.courses = payload.courses;
      draft.fetchPending = false;
    },
    coursesFailed: (draft, { payload }) => {
      draft.fetchPending = false;
      draft.error = payload.error;
    },
  },
});

export const { coursesFailed, getCourses, getCoursesSuccess } = slice.actions;
export default slice.reducer;

export function* getCoursesSaga({ payload }: StrictAction) {
  try {
    // Try and fetch the courses from the api
    // const courses = yield call(fetchCourses, {});

    // If the fetch is successful set the courses prop
    yield put(getCoursesSuccess({ courses: {} }));
  } catch (error) {
    // If the fetch is unsuccessful set the error prop
    yield put(coursesFailed({ error }));
  }
}
