import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function restauranteLaPlantaTatacoa() {
  const router = useRouter();

  const latitude = 3.2186;   // Coordenadas aproximadas del restaurante La Planta Brew Pub Tatacoa, Villavieja, Huila
  const longitude = -75.2152;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>La Planta Brew Pub Tatacoa</Text>

      <Image
        source={{ source={require("../img/cafe.png-img.webp")},

        style={styles.image}
      />

      <Text style={styles.description}>
        La Planta Brew Pub Tatacoa está ubicada en Villavieja, Huila, en pleno entorno del desierto de la Tatacoa. Es una cervecería-pub artesanal donde puedes disfrutar de cerveza hecha allí mismo, un ambiente relajado y colores vibrantes, ideal para compartir con amigos o como parada en tu visita al desierto.
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
            title="La Planta Brew Pub Tatacoa"
            description="Cervecería en Villavieja, Huila"
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
