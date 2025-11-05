import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function restauranteCasaBlancaParrillaMoas() {
  const router = useRouter();

  const latitude = 1.8930;   // Coordenadas aproximadas para Casa Blanca La Parrilla de Moas, San Agustín, Huila
  const longitude = -76.2540;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Casa Blanca La Parrilla de Moas</Text>

      <Image
        source={{
          uri: 'https://media-cdn.tripadvisor.com/media/photo-s/10/xx/xx/xx/casa-blanca-la-parrilla-de-moas.jpg', // Reemplaza por una imagen real tomada del restaurante
        }}
        style={styles.image}
      />

      <Text style={styles.description}>
        Casa Blanca La Parrilla de Moas está ubicada en Vía Parque Arqueológico Km 1, San Agustín (Huila).
      </Text>
      <Text style={styles.description}>
        Aquí encontrarás platos a la carta, asado huilense, ambiente ideal para almuerzo familiar o con amigos, y amplios espacios al aire libre.
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
            title="Casa Blanca La Parrilla de Moas"
            description="Restaurante en San Agustín, Huila"
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
