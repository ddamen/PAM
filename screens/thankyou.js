import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Thank you for participating! </Text> 
      <Text style={styles.subTitle}>Return again tomorrow to continue.  </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  welcomeTitle: {
    alignSelf: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }, 
  subTitle1: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  }
});
