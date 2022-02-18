import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "./global/constants";

// translations
import i18n from "./language/i18n"; // Dont remove
import { useTranslation } from "react-i18next";

// fonts
import * as Font from "expo-font";

// theme
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./redux/allReducers";

// -------------------------------------------------------------------------------------------------------

// start loading app data
const LoadAppData = async () => {
  await getFonts();
  await LoadLangFromAsyncStorage();
};

// display error when an error occures while loading app
const AppLoadingError = () => {
  // display error
};

// load and apply selected language from async storage
const LoadLangFromAsyncStorage = async () => {
  try {
    const lang = await AsyncStorage.getItem(Constants.AsyncStorage.language);
    if (lang !== null) {
      i18n.changeLanguage(lang);
    }
  } catch (error) {
    ToastAndroid.show(t("Error_LanguageSettignLoad"), ToastAndroid.LONG);
  }
};

// load fonts from assets
const getFonts = async () => {
  await Font.loadAsync({
    "audiowide-regular": require("./assets/fonts/audiowide_regular.ttf"),
  });
};

const store = createStore(allReducers, applyMiddleware(thunk));

export default function App() {
  // translation hook
  const { t, i18n } = useTranslation();

  // app loading state
  const [appLoading, setAppLoading] = useState(true);

  if (appLoading) {
    return <AppLoading startAsync={LoadAppData} onFinish={setAppLoading(false)} onError={AppLoadingError} />;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>{t(Constants.NavigationRoutes.NavigationHome)}</Text>
          <StatusBar style="auto" />
        </View>
      </Provider>
    );
  }
}

// -------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
