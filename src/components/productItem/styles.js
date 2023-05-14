import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontFamily: theme.fontsFamily.title,
    fontSize: 20,
    marginBottom: 10,
  },
  detail: {
    fontFamily: theme.fontsFamily.text,
    fontSize: 18,
    marginVertical: 5,
  },
});
