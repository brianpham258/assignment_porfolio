import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import {
  Grid,
  Avatar,
  TextField,
  Stack,
  Chip,
  Card,
  CardContent,
	IconButton
} from "@mui/material";

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

export default function StudentCardV2({ student, onKeyDown, onDeleteTag }) {
	const [tests, setTests] = useState(undefined);
  const { id, firstName, lastName, email, company, skill, grades, pic, tags } =
    student;
  const studentName = `${firstName} ${lastName}`;
  const totalGrade = grades.reduce((avg, grade) => avg + Number(grade), 0);
  const studentAvg = totalGrade / grades.length;

  const renderTests = () => (
    <div className="mt-16">
      {grades.map((grade, index) => (
        <div key={index}>
          <FormattedMessage id="students.student_info.test" /> {index + 1}{" "}
          <span className="ml-16">{grade}%</span>
        </div>
      ))}
    </div>
  );

  const renderTags = () => (
    <>
      {tags?.map((item, index) => (
        <Chip key={index} label={item} onDelete={() => onDeleteTag(id, item)} />
      ))}
    </>
  );

	const handleExpand = () => {
		if (!tests) {
			setTests(renderTests());
		} else {
			setTests(undefined);
		}
	};

  return (
    <Card style={{ borderRadius: 20 }}>
      <CardContent>
        <StyledGrid spacing={2}>
          <Grid item xs={11} md={3}>
            <StyledAvatar
              alt={studentName}
              src={pic}
              sx={{ width: 130, height: 130, marginTop: 3 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
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

							{tests}

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
					<Grid item xs={1}>
						<IconButton onClick={handleExpand} style={{ fontSize: '3em' }}>{tests ? '-' : '+'}</IconButton>
					</Grid>
        </StyledGrid>
      </CardContent>
    </Card>
  );
}

StudentCardV2.propTypes = {
  student: PropTypes.object.isRequired,

  onKeyDown: PropTypes.func,
  onDeleteTag: PropTypes.func,
};

StudentCardV2.defaultProps = {
  onKeyDown: () => {},
  onDeleteTag: () => {},
};
