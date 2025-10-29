import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function hotelTatacoa() {
  const router = useRouter();

  const latitude = 3.228011123290611;
  const longitude = -75.21358676142304;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hotel Cosmos Tatacoa</Text>

      <Image
        source={require("../img/tatacoa-hotel-img.webp")}
        style={styles.image}
      />

      <Text style={styles.description}>
       Cosmos Tatacoa Hotel tiene piscina al aire libre, jardín, salón de uso común y terraza en Villavieja.
       Este alojamiento ofrece restaurante, servicio de habitaciones y recepción 24 horas,
       además de wifi gratis en todo el alojamiento.
       la cafetería es ideal para tomar algo.
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
