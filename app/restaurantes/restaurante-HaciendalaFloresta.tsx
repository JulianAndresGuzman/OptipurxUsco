import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const unstable_settings = {
  headerShown: false,
}; 

export default function restauranteHaciendaLaFloresta() {
  const router = useRouter();

  const latitude = 2.6410;   // Coordenadas aproximadas para Hacienda La Floresta, Garzón (Huila)
  const longitude = -75.5620;

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 35 }} />

      <Text style={styles.title}>Hacienda La Floresta</Text>

      <Image
        source={require("../img/restaurante-haciendalafloresta-img.jpg")}
        style={styles.image}
      />

   <Text style={styles.description}>
  Hacienda La Floresta, ubicada en Garzón, Huila, es un restaurante campestre que combina una casona bicentenaria con jardines, lagos y un ambiente tranquilo para disfrutar de la gastronomía colombiana tradicional en un entorno natural.
</Text>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            title="Hacienda La Floresta"
            description="Restaurante en Garzón, Huila"
          />
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
