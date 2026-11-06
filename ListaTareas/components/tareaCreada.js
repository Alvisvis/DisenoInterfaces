
import { Text } from 'react-native';

import styles from '../styles/style.js';

export default function TareaCreada({ tareas }) {

  return (
    <Text style={styles.contador}>
      Tareas: {tareas.length} | Terminadas:{' '}
      {tareas.filter((tarea) => tarea.completada).length}
    </Text>
  );
}
