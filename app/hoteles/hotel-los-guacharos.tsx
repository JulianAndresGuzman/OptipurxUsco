import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function hotelGuacharos() {
  const router = useRouter();

  const latitude = 1.7279104797490288;
  const longitude = -76.13192836878434;

  return (
    
    
    <ScrollView style={styles.container}>

      <View style={{ height: 35 }} />
      <Text style={styles.title}>Hotel Los Guacharos</Text>

      <Image
        source={require("../img/hotel-los-guacharos.jpg")}
        style={styles.image}
      />

      <Text style={styles.description}>
    El Hotel Los Guácharos es un acogedor establecimiento ubicado en la zona urbana de Palestina, Huila , sobre la Carrera 4
    en el corazón del municipio, cerca del Parque de los Fundadores lanacion.com.co +13 mapcarta.com +13 laguia.online +13.
    Con un perfil de alojamiento cómodo y familiar, ofrece una opción ideal para los visitantes que planean explorar el
    Parque Nacional Natural Cueva de los Guácharos y los atractivos turísticos del sur del departamento.      
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
