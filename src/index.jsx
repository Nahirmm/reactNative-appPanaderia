import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";

import AppNavigator from "./navigation";
import { styles } from "./styles";

export default function App() {
  const [loaded] = useFonts({
    "Playfair-Italic-Black": require("../assets/fonts/PlayfairDisplay-BlackItalic.ttf"),
    "Playfair-Italic-Bold": require("../assets/fonts/PlayfairDisplay-BoldItalic.ttf"),
    "Playfair-Italic-ExtraBold": require("../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
    "Playfair-Italic-Regular": require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
    "Playfair-Italic-Medium": require("../assets/fonts/PlayfairDisplay-MediumItalic.ttf"),
    "Playfair-Italic-SemiBold": require("../assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return <AppNavigator />;
}
