import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';


export default function App() {
  return (
    <>
      < Home />
      <StatusBar style="auto" />
      </>
  );
}

