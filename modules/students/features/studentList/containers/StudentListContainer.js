import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import StudentList from "../components/StudentList";
import useUserListServices from "../hooks/useStudentListServices";

export default function StudentListContainer() {
  const [filteredStudents, setFilteredStudents] = useState(null);
  const [currentFilters, setCurrentFilter] = useState({
    name: null,
    tag: null,
  });
  const { fetchStudents, getStudents } = useUserListServices();
  const students = useSelector((state) => getStudents(state));

  useEffect(() => {
    fetchStudents();
  }, []);

  const getFilterByName = () =>
    students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(currentFilters.name) ||
        student.lastName.toLowerCase().includes(currentFilters.name)
    );

  const getFilterByTag = (filterData) => {
    const studentWithTags = (filterData || students).filter(
      (student) => student.tags !== undefined
    );
    const matchedStudent = studentWithTags.map((student) => {
      const result = student.tags.filter((tag) =>
        tag.includes(currentFilters.tag)
      );
      if (result.length > 0) return student;
      return null;
    });

    return matchedStudent;
  };

  useEffect(() => {
    if (currentFilters.name && currentFilters.tag) {
      const filterData = getFilterByName();
      const matchedStudent = getFilterByTag(filterData);

      setFilteredStudents(matchedStudent.filter((item) => item !== null));
    } else if (currentFilters.name && !currentFilters.tag) {
      const matchedStudent = getFilterByName();

      setFilteredStudents(matchedStudent);
    } else if (!currentFilters.name && currentFilters.tag) {
      const matchedStudent = getFilterByTag();

      setFilteredStudents(matchedStudent.filter((item) => item !== null));
    } else {
      setFilteredStudents(students);
    }
  }, [currentFilters, students]);

  const handleOnFilterByName = (input) => {
    if (input === "") {
      setCurrentFilter({ ...currentFilters, name: null });
      setFilteredStudents(null);
    } else {
      setCurrentFilter({ ...currentFilters, name: input });
    }
  };

  const handleOnFilterByTag = (input) => {
    if (input === "") {
      setCurrentFilter({ ...currentFilters, tag: null });
      setFilteredStudents(null);
    } else {
      setCurrentFilter({ ...currentFilters, tag: input });
    }
  };

  return (
    <StudentList
      students={filteredStudents || students}
      onFilterByName={handleOnFilterByName}
      onFilterByTag={handleOnFilterByTag}
    />
  );
}
