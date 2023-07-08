import { takeEvery, takeLatest } from "redux-saga/effects";

import { getCourses, getCoursesSaga } from "./slices/courses";

export default function* rootSaga() {
  // This says no matter what take the last request for the dispatch and run it
  yield takeLatest(getCourses.type, getCoursesSaga);

  // This runs every request, allowing bulk requests/actions to be run
  // yield takeEvery(getCourses.type, getCoursesSaga);
}
