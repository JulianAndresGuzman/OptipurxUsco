import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function restauranteElPatio() {
  const router = useRouter();

  const latitude = 2.9369;   // Coordenadas aproximadas del restaurante El Patio - Neiva
  const longitude = -75.2894;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurante El Patio</Text>

      <Image
        source={require("../img/restaurante-elpatio-img.png")}
        style={styles.image}
      />

      <Text style={styles.description}>
        El Patio es un restaurante acogedor en Neiva, Huila, reconocido por su ambiente tranquilo y su deliciosa oferta gastronómica que combina platos típicos colombianos con opciones internacionales. Ideal para disfrutar en familia o con amigos, ofrece una experiencia culinaria en un entorno lleno de naturaleza y buen gusto.
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
            title="El Patio"
            description="Restaurante en Neiva, Huila"
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
