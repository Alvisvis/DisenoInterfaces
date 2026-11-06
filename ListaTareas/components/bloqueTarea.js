
import { View, Text, Pressable } from 'react-native';

import styles from '../styles/style.js';

export default function BloqueTarea({
  tarea,
  cambiarEstado,
  borrarTarea
}) {

  return (
    <View style={styles.tarea}>

      <Pressable
        style={styles.botonCompletar}
        onPress={() => cambiarEstado(tarea.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: tarea.completada }}
        accessibilityLabel={`Completar ${tarea.titulo}`}
      >
        <Text style={styles.iconoCompletar}>
          {tarea.completada ? '☑' : '☐'}
        </Text>
      </Pressable>

      <Pressable
        style={styles.textoTarea}
        onPress={() => cambiarEstado(tarea.id)}
      >
        <Text
          style={[
            styles.tituloTarea,
            tarea.completada && styles.tareaCompletada,
          ]}
        >
          {tarea.titulo}
        </Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.botonEliminar,
          pressed && styles.botonPulsado,
        ]}
        onPress={() => borrarTarea(tarea.id)}
        accessibilityRole="button"
        accessibilityLabel={`Eliminar ${tarea.titulo}`}
      >
        <Text style={styles.textoEliminar}>
          Eliminar
        </Text>
      </Pressable>

    </View>
  );
}
