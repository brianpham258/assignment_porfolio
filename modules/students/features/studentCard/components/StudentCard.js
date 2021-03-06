import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import {
  Grid,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Stack,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledGrid = styled(Grid)`
  font-family: "Raleway", sans-serif;
  display: flex;
  width: 100%;
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

export default function StudentCard({ student, onKeyDown, onDeleteTag }) {
  const { id, firstName, lastName, email, company, skill, grades, pic, tags } =
    student;
  const studentName = `${firstName} ${lastName}`;
  const totalGrade = grades.reduce((avg, grade) => avg + Number(grade), 0);
  const studentAvg = totalGrade / grades.length;

  const renderTests = () => (
    <>
      {grades.map((grade, index) => (
        <div key={index}>
          <FormattedMessage id="students.student_info.test" /> {index + 1}{" "}
          <span className="ml-16">{grade}%</span>
        </div>
      ))}
    </>
  );

  const renderTags = () => (
    <>
      {tags?.map((item, index) => (
        <Chip key={index} label={item} onDelete={() => onDeleteTag(id, item)} />
      ))}
    </>
  );

  return (
    <Accordion style={{ borderRadius: 15 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <StyledGrid spacing={2}>
          <Grid item xs={12} md={3}>
            <StyledAvatar
              alt={studentName}
              src={pic}
              sx={{ width: 130, height: 130, marginTop: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={9} style={{ width: "100%" }}>
            <StyledStudentName>{studentName.toUpperCase()}</StyledStudentName>
            <StyledStudentInfo>
              <div>
                <FormattedMessage id="students.student_info.email" />: {email}
              </div>
              <div>
                <FormattedMessage id="students.student_info.company" />:{" "}
                {company}
              </div>
              <div>
                <FormattedMessage id="students.student_info.skill" />: {skill}
              </div>
              <div>
                <FormattedMessage id="students.student_info.average" />:{" "}
                {studentAvg}%
              </div>

              <Stack direction="row" spacing={1} style={{ padding: "10px 0" }}>
                {renderTags()}
              </Stack>
              <TextField
                id="add-tag"
                label={<FormattedMessage id="students.student_info.add_tags" />}
                variant="standard"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => onKeyDown(e, id)}
              />
            </StyledStudentInfo>
          </Grid>
        </StyledGrid>
      </AccordionSummary>
      <AccordionDetails>
        <StyledGrid spacing={2}>
          <Grid item xs={12} md={3} />
          <Grid item xs={12} md={9}>
            <StyledStudentInfo>{renderTests()}</StyledStudentInfo>
          </Grid>
        </StyledGrid>
      </AccordionDetails>
    </Accordion>
  );
}

StudentCard.propTypes = {
  student: PropTypes.object.isRequired,

  onKeyDown: PropTypes.func,
  onDeleteTag: PropTypes.func,
};

StudentCard.defaultProps = {
  onKeyDown: () => {},
  onDeleteTag: () => {},
};
