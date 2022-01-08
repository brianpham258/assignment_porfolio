import { useDispatch } from "react-redux";

import * as actions from '../layoutSlice';

export default function useLayoutServices() {
    const dispatch = useDispatch();

    // getter
    const getLanguage = (state) => state.core.layout.ln;

    // setter
    const setLanguage = (language) => dispatch(actions.setLanguage(language));

    return { getLanguage, setLanguage };
};