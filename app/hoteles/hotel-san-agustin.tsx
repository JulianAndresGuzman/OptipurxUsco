import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function hotelSanAgustin() {
  const router = useRouter();

  const latitude = 1.8902648938843107;
  const longitude = -76.27276587975831;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hotel Terrazas de San Agustín</Text>

      <Image
        source={require("../img/san-agustin-hotel.webp")}
        style={styles.image}
      />

      <Text style={styles.description}>
      En el hotel, todas las habitaciones están equipadas con armario.
      Las habitaciones del alojamiento tienen baño privado con ducha y artículos de aseo gratuitos,
      y algunas habitaciones también incluyen vistas a la ciudad.
      En Terrazas de San Agustin Hotel, las habitaciones incluyen escritorio y TV.
      </Text>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={{ latitude, longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
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
