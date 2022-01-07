import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card, CardContent, Avatar } from "@mui/material";

const StyledCard = styled(Card)`
  font-family: "Raleway", sans-serif;
  border-radius: 0px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  border: 1px solid #bfbfbf;
`;

const StyledStudentName = styled.div`
  font-weight: bold;
  font-size: 2em;
`;

const StyledStudentInfo = styled.div`
  margin-left: 20px;
  font-weight: 400;
`;

export default function StudentCard({ student }) {
  const { firstName, lastName, email, company, skill, grades, pic } = student;
  const studentName = `${firstName} ${lastName}`;
  const totalGrade = grades.reduce((avg, grade) => avg + Number(grade), 0);
  const studentAvg = totalGrade / grades.length;
  return (
    <StyledCard>
      <StyledCardContent>
        <div>
          <StyledAvatar
            alt={studentName}
            src={pic}
            sx={{ width: 120, height: 120 }}
          />
        </div>
        <div style={{ marginLeft: 40 }}>
          <StyledStudentName>{studentName.toUpperCase()}</StyledStudentName>
          <StyledStudentInfo>
            <div>Email: {email}</div>
            <div>Company: {company}</div>
            <div>Skill: {skill}</div>
            <div>Agerage: {studentAvg}%</div>
          </StyledStudentInfo>
        </div>
      </StyledCardContent>
    </StyledCard>
  );
}

StudentCard.propTypes = {
  student: PropTypes.object.isRequired,
};
