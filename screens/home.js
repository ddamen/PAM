import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) { 

    const pressHandler = () =>{
        navigation.navigate('images')
    }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title = 'go to images' onPress={pressHandler}/>
    </View>
  );
}