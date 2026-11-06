import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/styles.js";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detalles</Text>

        <Text style={styles.text}>Esta es la pantalla de detalles</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Volver"
            color="#C62828"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
}
