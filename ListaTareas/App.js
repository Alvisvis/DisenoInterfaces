
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles/style.js';
import TareaCreada from './components/tareaCreada.js';
import BloqueTarea from './components/bloqueTarea.js';
import AnadirTarea from './components/anadirTarea.js';

export default function App() {

  const [text, setTexto] = useState('');
  const [tareas, setTareas] = useState([]);

  const nuevaTarea = () => {
    const titulo = text.trim();

    if (titulo === '') {
      return;
    }

    const tarea = {
      id: Date.now().toString(),
      titulo: titulo,
      completada: false,
    };

    setTareas((actuales) => [...actuales, tarea]);
    setTexto('');
  };

  const cambiarEstado = (id) => {
    setTareas((actuales) =>
      actuales.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  const borrarTarea = (id) => {
    setTareas((actuales) =>
      actuales.filter((tarea) => tarea.id !== id)
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Listas de tareas
      </Text>

      <AnadirTarea
        text={text}
        setTexto={setTexto}
        nuevaTarea={nuevaTarea}
      />

      <TareaCreada tareas={tareas} />

      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BloqueTarea
            tarea={item}
            cambiarEstado={cambiarEstado}
            borrarTarea={borrarTarea}
          />
        )}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.mensajeVacio}>
            No tienes tareas todavía
          </Text>
        }
      />

    </View>
  );
}
