import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import StudentList from "../components/StudentList";
import useUserListServices from "../hooks/useStudentListServices";

export default function StudentListContainer() {
  const {
    fetchStudents,
    getStudents,
    setFilteredStudents,
    getFilteredStudents,
  } = useUserListServices();
  const students = useSelector((state) => getStudents(state));
  const filteredStudents = useSelector((state) => getFilteredStudents(state));

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleOnFilter = (input) => {
    if (input === "") return setFilteredStudents(null);

    const filteredStudentList = students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(input) ||
        student.lastName.toLowerCase().includes(input)
    );

    return setFilteredStudents(filteredStudentList);
  };

  return (
    <StudentList
      students={filteredStudents || students}
      onFilter={handleOnFilter}
    />
  );
}
