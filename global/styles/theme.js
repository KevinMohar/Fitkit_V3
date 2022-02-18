import { Dimensions } from "react-native";
import Constants from "../constants";

// -------------------------------------------------------------------------------------------------------

const { width, height } = Dimensions.get("window");

export const defaultTheme = {
  mode: "default",

  COLOR_PRIMARY: Constants.Colors.darkBlue63,
  COLOR_PRIMARY_TEXT: Constants.Colors.white,
  COLOR_PRIMARY_TEXT_2: Constants.Colors.lightGray80,

  COLOR_SECONDARY: Constants.Colors.white,
  COLOR_SECONDARY_TEXT: Constants.Colors.darkGray100,
  COLOR_SECONDARY_TEXT_2: Constants.Colors.lightGray80,

  COLOR_TERTIARY: Constants.Colors.iris100,
  COLOR_TERTIARY_TEXT: Constants.Colors.white,
  COLOR_TERTIARY_TEXT_2: Constants.Colors.lightGray80,

  COLOR_QUATERNARY: Constants.Colors.iris80,
  COLOR_QUATERNARY_TEXT: Constants.Colors.white,
  COLOR_QUATERNARY_TEXT_2: Constants.Colors.lightGray80,

  COLOR_QUATERNARY: Constants.Colors.iris80,
  COLOR_QUATERNARY_TEXT: Constants.Colors.white,
  COLOR_QUATERNARY_TEXT_2: Constants.Colors.lightGray80,

  COLOR_FIVETERNARY: Constants.Colors.iris60,
  COLOR_FIVETERNARY_TEXT: Constants.Colors.white,
  COLOR_FIVETERNARY_TEXT_2: Constants.Colors.lightGray80,

  FontSize: {
    ...Constants.FontSize,
  },
  WIDTH: width,
  HEIGHT: height,
};
