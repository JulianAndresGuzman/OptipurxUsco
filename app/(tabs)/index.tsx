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
      latitude: 3.2333462,
      longitude: -75.1690534,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/desierto-tatacoa",
    },
    {
      id: "sanagustin",
      title: "San Agustín",
      description: "Esculturas precolombinas y ruinas arqueológicas",
      latitude: 1.87917,
      longitude: -76.26833,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/san-agustin",
    },
    {
      id: "betania",
      title: "Embalse de Betania",
      description: "Gran embalse del río Magdalena cerca de Neiva",
      latitude: 2.685,
      longitude: -75.44,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/betania",
    },
    {
      id: "nevado",
      title: "Nevado del Huila",
      description: "Volcán y nevado, paisaje alto del departamento",
      latitude: 2.917,
      longitude: -76.05,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/nevado",
    },
    {
      id: "guecharos",
      title: "Parque Cueva de los Guácharos",
      description: "Cuevas naturales en el límite con Caquetá",
      latitude: 1.367,
      longitude: -76.225,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/guacharos",
    },
    {
      id: "termalesrivera",
      title: "Termales de Rivera",
      description: "Aguas termales del municipio de Rivera",
      latitude: 2.7566,
      longitude: -75.23774,
      color: "#FF5733",
      type: "tourist",
      route: "/sitios-turisticos/termales-rivera",
    },
    {
      id: "mano-gigante",
      title: "Mirador La Mano del Gigante",
      description: "Mirador panorámico con forma de mano gigante",
      latitude: 2.41761,
      longitude: -75.49358,
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
    {
      id: "restaurante-casa-blanca",
      title: "Restaurante Casa Blanca",
      description: "¿Qué te parece si disfrutas tu día con uno de nuestros platos preferidos por todos? Nuestro Equipo de trabajo esta listo para brindarte la mejor atención de toda la ciudad",
      latitude: 1.8930,
      longitude: -76.2540,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-casablanca",
    },
     {
      id: "restaurante-chibchili",
      title: "Restaurante Chibchili",
      description: "Chibchili, ubicado en Rivera, Huila, es un restaurante que ofrece una experiencia gastronómica con platos tradicionales mexicanos en un ambiente acogedor.",
      latitude: 2.77717,
      longitude: -75.25642,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-chibchili",
    },
    {
      id: "restaurante-Copenhague-Pub",
      title: "Restaurante Copenhague Pub",
      description: "Copenhague Pub es un bar-restaurante en Neiva",
      latitude: 2.9300,
      longitude: -75.2890,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-COPHENAGUE-PUB",
    },
        {
      id: "restaurante-Hacienda-la-floresta",
      title: "Restaurante Hacienda la floresta",
      description: "Hacienda La Floresta, ubicada en Garzón, Huila, es un restaurante campestre que combina una casona bicentenaria con jardines",
      latitude: 2.6410,
      longitude: -75.5620,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-HaciendalaFloresta",
    },
        {
      id: "restaurante-la-planta-tatacoa",
      title: "Restaurante La Planta Brew Pub Tatacoa",
      description: "Es una cervecería-pub artesanal donde puedes disfrutar de cerveza hecha allí mismo, un ambiente relajado",
      latitude: 3.2186,
      longitude: -75.2152,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-LaPlantaBrewPubTatacoa",
    },
            {
      id: "restaurante-patio",
      title: "Restaurante El Patio",
      description: "El Patio es un restaurante acogedor en Neiva, Huila, reconocido por su ambiente tranquilo y su deliciosa oferta gastronómica que combina platos típicos colombianos con opciones internacionales. ",
      latitude: 2.9369,
      longitude: -75.2894,
      color: "#3B82F6",
      type: "restaurant",
      route: "/restaurantes/restaurante-patio",
    },
    // Hoteles
    {
      id: "cosmosTatacoa",
      title: "Hotel Cosmos Tatacoa",
      description: "Alojamiento cerca del desierto de la tatacoa",
      latitude: 3.228011123290611,
      longitude: -75.21358676142304,
      color: "#FFD700",
      type: "hotel",
      route: "/hoteles/hotel-tatacoa",
    },
    {
      id: "hotelSanAgustin",
      title: "Hotel Terrazas de San Agustín",
      description: "Alojamiento cerca del parque turistico de San Agustín",
      latitude: 1.8902648938843107,
      longitude: -76.27276587975831,
      color: "#FFD700",
      type: "hotel",
      route: "/hoteles/hotel-san-agustin"
    },
    {
      id: "hotelBetania",
      title: "Hotel El Lago Resort",
      description: "Alojamiento cerca de la represa de Betania",
      latitude: 2.6638554472367595,
      longitude: -75.51706233067632,
      color: "#FFD700",
      type: "hotel",
      route: "/hoteles/hotel-betania"
    },
    {
      id: "hotelGuacharos",
      title: "Hotel Palestina Huila Los Guacharos",
      description: "Alojamiento cerca de La cueva de los guacharos",
      latitude: 1.7279104797490288,
      longitude: -76.13192836878434,
      color: "#FFD700",
      type: "hotel",
      route: "/hoteles/hotel-los-guacharos",
    },
    {
      id: "hotelManoGigante",
      title: "Hotel Bio habitat Entre Montañas",
      description: "Alojamiento en Gigante bueno |cerca| de la mano de gigante",
      latitude: 2.443014438415437,
      longitude: -75.48693974558394,
      color: "#FFD700",
      type: "hotel",
      route: "/hoteles/hotel-mano-gigante",
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
                  onPress={() => router.push(place.route as any)}
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