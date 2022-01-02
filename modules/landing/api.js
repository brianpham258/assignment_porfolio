/* eslint-disable import/no-anonymous-default-export */
import qs from "qs";
import axios from "axios";

const getIncludeQuery = (includes = [], options = {}) => {
  const queryObj = { ...options };

  if (includes) {
    queryObj.include = includes.join(",");
  }

  const query = qs.stringify(queryObj);

  return query;
};

export default {
  fetchOrders: ({ options, includes }) =>
    axios.get(`https://www.google.com?${getIncludeQuery(includes, options)}`),
};
