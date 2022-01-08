import { useCallback } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../studentListSlice";

export default function useStudentListServices() {
  const dispatch = useDispatch();

  // actions
  const fetchStudents = useCallback(
    () => dispatch(actions.fetchStudents()),
    [dispatch]
  );

  // getter
  const getStudents = (state) => state.students.studentList.students;

  // setter
  const updateStudents = (studentList) => dispatch(actions.updateStudents(studentList));

  return {
    fetchStudents,
    getStudents,
    updateStudents
  };
}
