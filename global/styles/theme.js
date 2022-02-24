import { Dimensions } from "react-native";
import Constants from "../constants";

// -------------------------------------------------------------------------------------------------------

const { width, height } = Dimensions.get("window");

export const defaultTheme = {
  mode: "default",

  COLOR_PRIMARY: "#2F3E89",
  COLOR_SECONDARY: "#2F3E89",
  COLOR_ACCENT: "#475FDA",

  COLOR_BACKGROUND_MAIN: "#F7F6F9",
  COLOR_BACKGROUND_TABNAV: Constants.Colors.white,

  COLOR_BORDER: "#dddddd",

  COLOR_TEXT_BG_PRIMARY: Constants.Colors.black,
  COLOR_TEXT_BG_SECONDARY: "#78777A",
  COLOR_TEXT_BG_ACCENT: "#4b5fce",

  COLOR_TEXT_PRIMARY: Constants.Colors.white,
  COLOR_TEXT_SECONDARY: "#6E77A5",
  COLOR_TEXT_ACCENT: "#4b5fce",

  COLOR_TABNAV_ICON: Constants.Colors.black,
  COLOR_TABNAV_ICON_DISABLED: "#DDDDDD",

  FontSize: {
    ...Constants.FontSize,
  },
  WIDTH: width,
  HEIGHT: height,
};
