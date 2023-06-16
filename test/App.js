import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import TextInANest from '../Components/TextInANest';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>hola</Text>
      <StatusBar style="auto" />
      <View style={styles.containerRojo}/>
      <View style={styles.containerAzul}/>
      <TextInANest></TextInANest>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height:100,
    marginTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRojo:{
    flexDirection:"row",
    height:100,
    padding:20,
    backgroundColor: 'red'
  },
  containerAzul:{
    flexDirection:"row",
    height:100,
    padding:20,
    backgroundColor: 'blue'
  }
});
