
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Fondo principal
  container: {
    flex: 1,
    backgroundColor: '#160B0D',
    justifyContent: 'center',
    padding: 20,
  },

  // Tarjeta central
  card: {
    backgroundColor: '#291316',
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6D2028',
    elevation: 8,
  },

  // Título principal
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4545',
    textAlign: 'center',
    marginBottom: 15,
  },

  // Texto normal
  text: {
    fontSize: 16,
    color: '#F5E6E6',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Contenedor de botones
  buttonContainer: {
    marginTop: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },

  // Texto para botones personalizados con Pressable
  button: {
    backgroundColor: '#C62828',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Texto secundario
  subtitle: {
    color: '#D99A9A',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
  },

});

export default styles;
