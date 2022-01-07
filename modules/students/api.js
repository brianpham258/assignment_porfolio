/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

import { getIncludeQuery } from '@core/utils';

export default {
  fetchStudents: () => axios.get("https://api.hatchways.io/assessment/students")
};
