import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fontsFamily.title,
    fontSize: 20,
  },
  details: {
    fontFamily: theme.fontsFamily.text,
    fontSize: 18,
  },
});
