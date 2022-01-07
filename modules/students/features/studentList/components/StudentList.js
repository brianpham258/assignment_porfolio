import React from "react";
import PropTypes from "prop-types";

import { TextField } from "@mui/material";

import { Title } from "@core/features";

import StudentCard from "../../studentCard/components/StudentCard";

export default function StudentList({ students, onFilter }) {
  return (
    <>
      <Title>Students List</Title>
      <TextField
        id="student-search"
        label="Search by name"
        type="search"
        variant="standard"
        style={{ marginBottom: 15 }}
        onChange={e => onFilter(e.target.value)}
      />
      {students.map((item, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <StudentCard student={item} />
        </div>
      ))}
    </>
  );
}

StudentList.propTypes = {
  students: PropTypes.array,
  onFilter: PropTypes.func
};

StudentList.defaultProps = {
  students: [],
  onFilter: () => {}
};