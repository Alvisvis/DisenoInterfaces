import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/styles.js";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Inicio</Text>

        <Text style={styles.text}>Bienvenido a nuestra aplicación</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Ir a Detalles"
            color="#C62828"
            onPress={() => navigation.navigate("Detalles")}
          />
        </View>
      </View>
    </View>
  );
}
