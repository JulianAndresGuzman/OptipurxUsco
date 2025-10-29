import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function SanAgustinDetails() {
  const router = useRouter();

  const latitude = 1.87917; //Ubicación
  const longitude = -76.26833;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Parque Arqueológico de San Agustín</Text>

      <Image
        source={require("../img/san-agustin-huila-img.jpg")}
        style={styles.image}
      />

      <Text style={styles.description}>
        San Agustín alberga el mayor conjunto de esculturas megalíticas de América Latina.
        Es Patrimonio de la Humanidad (UNESCO) y un sitio arqueológico clave de culturas precolombinas.
      </Text>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        >
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
