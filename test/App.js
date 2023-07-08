import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TextInANest from './Components/TextInANest';
import UselessTextInput from './Components/UselessTextInput';
import React from 'react';
import InputYButton from './Components/InputYButton';


export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {/*}View style={{backgroundColor:"blue",flex:0.3}}/>
      <View style={{backgroundColor:"red",flex:0.5}}/>
      <Text>Hola Mundo !</Text>
      <TextInANest></TextInANest>
      <UselessTextInput></UselessTextInput>*/}
        <InputYButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
