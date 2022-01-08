/* eslint-disable import/no-anonymous-default-export */
import layoutEN from './layout/en';
import layoutVI from './layout/vi';

import studentsEN from './students/en';
import studentsVI from './students/vi';

export default {
    'en-US': {
        ...layoutEN,
        ...studentsEN
    },
    'vi-VN': {
        ...layoutVI,
        ...studentsVI
    }
};