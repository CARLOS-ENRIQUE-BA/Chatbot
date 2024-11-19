import React from 'react';
import { SafeAreaView, Text, Image, Button, StyleSheet, View, Linking } from 'react-native';
import localImage from '../../assets/img/LogoUPCH.png'; // Ajusta la ruta según la ubicación de tu imagen

const Home = () => {
  const handlePress = () => {
    Linking.openURL('https://github.com/tu-usuario/tu-repositorio');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a mi aplicación</Text>
        <Image
          source={localImage}
          style={styles.image}
        />
        <Text style={styles.subTitle}>Ingeniería en Desarrollo de Software</Text>
        <Text style={styles.subTitle}>Programación para móviles II</Text>
        <Text style={styles.subTitle}>Grupo A</Text>
        <Text style={styles.subTitle}>Carlos Enrique Barriga Aguilar</Text>
        <Text style={styles.subTitle}>221188</Text>
        <Button title="Ir al repositorio" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

//carrera, materia, grupo, nombre del alumno, matrícula,

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Home;
