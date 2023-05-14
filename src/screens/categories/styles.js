import { StyleSheet } from "react-native";

import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: theme.fontsFamily.title,
    fontSize: 30,
    textAlign: "center",
    marginVertical: 15,
  },
});
