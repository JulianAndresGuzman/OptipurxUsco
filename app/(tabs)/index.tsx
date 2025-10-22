import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function HomeScreen() {
  const router = useRouter();
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "restaurant" | "hotel" | "tourist">("all");

  const places = [
    // Sitios turísticos
    {
      id: "tatacoa",
      title: "Desierto de la Tatacoa",
      description: "Paisaje desértico de Villavieja, Huila",
      latitude: 3.2152,
      longitude: -75.1736,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/desierto-tatacoa",
    },
    {
      id: "sanagustin",
      title: "San Agustín",
      description: "Esculturas precolombinas y ruinas arqueológicas",
      latitude: 1.8808,
      longitude: -76.2694,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/san-agustin",
    },
    {
      id: "betania",
      title: "Embalse de Betania",
      description: "Gran embalse del río Magdalena cerca de Neiva",
      latitude: 2.937,
      longitude: -75.45,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/betania",
    },
    {
      id: "nevado",
      title: "Nevado del Huila",
      description: "Volcán y nevado, paisaje alto del departamento",
      latitude: 2.92,
      longitude: -76.06,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/nevado",
    },
    {
      id: "guecharos",
      title: "Parque Cueva de los Guácharos",
      description: "Cuevas naturales en el límite con Caquetá",
      latitude: 1.9,
      longitude: -76.3,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/guacharos",
    },
    {
      id: "termalesrivera",
      title: "Termales de Rivera",
      description: "Aguas termales del municipio de Rivera",
      latitude: 2.6,
      longitude: -75.66,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/termales-rivera",
    },
    {
      id: "mano-gigante",
      title: "Mirador La Mano del Gigante",
      description: "Mirador panorámico con forma de mano gigante",
      latitude: 2.85,
      longitude: -75.25,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/mano-gigante",
    },

    // Restaurantes
    {
      id: "restaurante-avenida",
      title: "Restaurante Avenida",
      description: "Comida típica de Neiva, Huila",
      latitude: 2.938,
      longitude: -75.2819,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-avenida",
    },

    // Hoteles
    {
      id: "hotelandino",
      title: "Hotel Andino",
      description: "Alojamiento en el centro de Neiva",
      latitude: 2.94,
      longitude: -75.29,
      color: "#FFD700",
      type: "hotel",
      route: "/hoteles/hotel-andino",
    },
  ];

  // 🔍 Filtro activo
  const filteredPlaces = filter === "all" ? places : places.filter((p) => p.type === filter);

  return (
    <View style={styles.container}>
      {/* Encabezado tipo "OPITUR" */}
      <View style={styles.header}>
        <Text style={styles.title}>OPITUR</Text>
        <View style={styles.buttonsContainer}>
          {/* Botón restaurantes */}
          <TouchableOpacity
            style={[styles.circleButton, filter === "restaurant" && styles.activeButton]}
            onPress={() => setFilter(filter === "restaurant" ? "all" : "restaurant")}
          >
            <Text style={styles.emoji}>🍴</Text>
          </TouchableOpacity>

          {/* Botón hoteles */}
          <TouchableOpacity
            style={[styles.circleButton, filter === "hotel" && styles.activeButton]}
            onPress={() => setFilter(filter === "hotel" ? "all" : "hotel")}
          >
            <Text style={styles.emoji}>🏨</Text>
          </TouchableOpacity>

          {/* Botón turísticos */}
          <TouchableOpacity
            style={[styles.circleButton, filter === "tourist" && styles.activeButton]}
            onPress={() => setFilter(filter === "tourist" ? "all" : "tourist")}
          >
            <Text style={styles.emoji}>📍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🗺️ Mapa */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 2.9273,
          longitude: -75.2819,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}
      >
        {filteredPlaces.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            pinColor={place.color}
            onPress={() => setSelectedPlace(place.id)}
          />
        ))}
      </MapView>

      {/* 🧾 Tarjeta flotante */}
      {selectedPlace && (
        <View style={styles.infoCard}>
          {(() => {
            const place = places.find((p) => p.id === selectedPlace)!;
            return (
              <>
                <Text style={styles.cardTitle}>{place.title}</Text>
                <Text style={styles.cardDesc}>{place.description}</Text>

                {/* Botón "Ver más" */}
                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() => router.push(place.route)}
                >
                  <Text style={styles.cardButtonText}>Ver más →</Text>
                </TouchableOpacity>

                {/* Cerrar tarjeta */}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedPlace(null)}
                >
                  <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>
              </>
            );
          })()}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E7C188" },
  header: {
    backgroundColor: "#E7C188",
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3B2F2F",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#F9E4C8",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    elevation: 5,
  },
  activeButton: {
    backgroundColor: "#D1B38A",
  },
  emoji: { fontSize: 24 },
  map: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  infoCard: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    elevation: 6,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  cardDesc: {
    marginTop: 4,
    color: "#555",
  },
  cardButton: {
    marginTop: 8,
    backgroundColor: "#3B82F6",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 10,
  },
  closeText: {
    fontSize: 20,
    color: "#888",
  },
});