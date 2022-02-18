import i18next from "i18next";
import eng from "./translations/english.json";
import { initReactI18next } from "react-i18next";

// -------------------------------------------------------------------------------------------------------

// Register additional languages:
// - add translation .json file to ./translations folder (copy design from english.json)
// - import .json file (like english file)
// - register language in resources object below (just like eng: eng)

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "eng",
  fallbackLng: "eng",
  resources: {
    eng: eng,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
