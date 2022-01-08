import React from "react";
import PropTypes from "prop-types";
import { orderBy } from "lodash";

import StudentCard from "../components/StudentCard";
import StudentCardV2 from "../components/StudentCardV2";
import useStudentListServices from "../../studentList/hooks/useStudentListServices";

export default function StudentCardContainer({ studentList, student }) {
  const { updateStudents } = useStudentListServices();

  const getMatchedStudent = (id) => {
    const matchedStudent = studentList.find((student) => student.id === id);
    const studentWithTags = { ...matchedStudent };
    const tagList = studentWithTags.tags || [];
    return { matchedStudent: studentWithTags, tagList };
  };

  const updateStudentList = (id, matchedStudent) => {
    const newStudentList = orderBy(
      [...studentList.filter((student) => student.id !== id), matchedStudent],
      "id",
      "asc"
    );
    updateStudents(newStudentList);
  };

  const handleKeyDown = (e, id) => {
    if (e.code === "Enter") {
      const { matchedStudent, tagList } = getMatchedStudent(id);
      if (!tagList.includes(e.target.value)) {
        matchedStudent.tags = tagList.concat([e.target.value]);
      }
      updateStudentList(id, matchedStudent);
      e.target.value = "";
    }
  };

  const handleDeleteTag = (id, tag) => {
    const { matchedStudent, tagList } = getMatchedStudent(id);
    const filteredTagList = tagList.filter((item) => item !== tag);
    matchedStudent.tags = filteredTagList;
    updateStudentList(id, matchedStudent);
  };

  return (
    <StudentCardV2
      student={student}
      onKeyDown={handleKeyDown}
      onDeleteTag={handleDeleteTag}
    />
  );
}

StudentCardContainer.propTypes = {
  student: PropTypes.object.isRequired,
  studentList: PropTypes.array,
};

StudentCardContainer.defaultProps = {
  studentList: [],
};
