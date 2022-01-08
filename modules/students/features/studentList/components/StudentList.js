import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

import { TextField } from "@mui/material";

import { Title } from "@core/features";

import StudentCardContainer from "../../studentCard/containers/StudentCardContainer";

export default function StudentList({ students, onFilterByName, onFilterByTag }) {
  return (
    <>
      <Title><FormattedMessage id="students.student_list" /></Title>
      <TextField
        id="student-search"
        className="mb-16"
        label={<FormattedMessage id="students.name_search" />}
        type="search"
        variant="standard"
        onChange={e => onFilterByName(e.target.value)}
      />
      <TextField
        id="student-search"
        className="mb-16"
        label={<FormattedMessage id="students.tag_search" />}
        type="search"
        variant="standard"
        onChange={e => onFilterByTag(e.target.value)}
      />
      {students.map((item, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <StudentCardContainer studentList={students} student={item} />
        </div>
      ))}
    </>
  );
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired,

  onFilterByName: PropTypes.func,
  onFilterByTag: PropTypes.func
};

StudentList.defaultProps = {
  onFilterByName: () => {},
  onFilterByTag: () => {}
};