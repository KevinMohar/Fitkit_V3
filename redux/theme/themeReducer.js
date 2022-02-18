import { defaultTheme } from "../../global/styles/theme";
import { SWITCH_THEME } from "./themeActions";

// -------------------------------------------------------------------------------------------------------

const initialState = {
  theme: defaultTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { theme: action.theme };
      break;

    default:
      return state;
      break;
  }
};

export default themeReducer;
