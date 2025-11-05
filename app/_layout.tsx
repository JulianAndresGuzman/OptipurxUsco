import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="hoteles" options={{ headerShown: false }} />
      <Stack.Screen name="restaurantes" options={{ headerShown: false }} />
      <Stack.Screen name="sitios-turisticos" options={{ headerShown: false }} />
    </Stack>
  );
}
