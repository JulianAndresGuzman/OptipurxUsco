import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function TatacoaDetails() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Desierto de la Tatacoa</Text>

      <Image
        source={require("../img/desierto-de-la-tatacoa-img.webp")}
        style={styles.image}
      />

      <Text style={styles.description}>
        Uno de los desiertos más impresionantes de Colombia. Famoso por sus formaciones rocosas y
        cielos estrellados.
      </Text>

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
  description: { fontSize: 16, textAlign: 'justify' },
  back: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
});
