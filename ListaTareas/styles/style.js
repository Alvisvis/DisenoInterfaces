import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6dbdff",
    padding: 25,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000000",
  },
  formulario: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  input: {
    flex: 1,
    backgroundColor: "#dddddd",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  botonAgregar: {
    backgroundColor: "#1101f8",
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 12,
  },
  textoBotonAgregar: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  contador: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 14,
    color: "#585858",
  },
  lista: {
    paddingBottom: 24,
    flexGrow: 1,
  },
  tarea: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9f2fc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    gap: 8,
  },
  botonCompletar: {
    padding: 4,
  },
  iconoCompletar: {
    fontSize: 30,
    color: "#059b49",
  },
  textoTarea: {
    flex: 1,
    paddingVertical: 6,
  },
  tituloTarea: {
    fontSize: 16,
    color: "#252525",
  },
  tareaCompletada: {
    textDecorationLine: "line-through",
    color: "#999999",
  },
  botonEliminar: {
    backgroundColor: "#fc6868a6",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  textoEliminar: {
    color: "#c62828",
    fontWeight: "bold",
    fontSize: 15,
  },
  botonPulsado: {
    opacity: 0.65,
  },
  mensajeVacio: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#8a8a8a",
    marginTop: 40,
    fontSize: 15,
  },
});
export default styles