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
  const getFilteredStudents = (state) =>
    state.students.studentList.filteredStudents;

  // setter
  const setFilteredStudents = (studentList) =>
    dispatch(actions.setFilteredStudents(studentList));

  return {
    fetchStudents,
    getStudents,
    getFilteredStudents,
    setFilteredStudents,
  };
}
