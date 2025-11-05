import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ManoGigante() {
  const router = useRouter();

  const latitude = 2.41761; // Ubicación
  const longitude = -75.49358;

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 35 }} />
      <Text style={styles.title}>Mirador La Mano del Gigante</Text>

      <Image
        source={require("../img/mano-gigante-huila-img.jpg")}
        style={styles.image}
      />

      <Text style={styles.description}>
        Mirador panorámico con vistas espectaculares del valle y del río. Lugar recomendado para fotografía.
      </Text>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={{ latitude, longitude, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>

      <Text style={styles.back} onPress={() => router.back()}>
        ← Volver
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9E4C8', padding: 15 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
  description: { fontSize: 16, textAlign: 'justify', color: '#333' },
  mapContainer: { width: '100%', height: 200, borderRadius: 10, overflow: 'hidden', marginTop: 12 },
  map: { flex: 1 },
  back: { textAlign: 'center', marginTop: 16, fontWeight: 'bold', color: '#3B82F6' },
});
