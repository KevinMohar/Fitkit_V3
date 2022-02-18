import { StyleSheet } from "react-native";
import { Constants } from "../constants";

const GlobalStyles = StyleSheet.create({
  Title: {
    fontFamily: Constants.Fonts.audiowider_regular,
    fontSize: Constants.FontSize.H1,
  },
  Paragraph: {
    fontFamily: Constants.Fonts.audiowider_regular,
    fontSize: Constants.FontSize.H3,
  },
  Chapter: {
    fontFamily: Constants.Fonts.audiowider_regular,
    fontSize: Constants.FontSize.H2,
  },
});

export default GlobalStyles;
