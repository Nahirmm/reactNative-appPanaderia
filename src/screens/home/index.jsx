import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidx!</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={styles.textButton}>Ir a Categorias</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
