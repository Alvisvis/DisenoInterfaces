
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from '../styles/style.js';

export default function AnadirTarea({
  text,
  setTexto,
  nuevaTarea
}) {

  return (
    <View style={styles.formulario}>

      <TextInput
        style={styles.input}
        placeholder="Introduce tu tarea"
        value={text}
        onChangeText={setTexto}
        onSubmitEditing={nuevaTarea}
        returnKeyType="done"
        accessibilityLabel="Nueva tarea"
      />

      <Pressable
        style={({ pressed }) => [
          styles.botonAgregar,
          pressed && styles.botonPulsado,
        ]}
        onPress={nuevaTarea}
        accessibilityRole="button"
      >
        <Text style={styles.textoBotonAgregar}>
          Añadir Tarea
        </Text>
      </Pressable>

    </View>
  );
}
