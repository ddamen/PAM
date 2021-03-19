import React, { useState }  from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) { 
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState('30');

    const pressHandler = () =>{
        navigation.navigate('images')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to PAM!</Text>       
      <Text style={styles.subTitle1}>Enter email:</Text>
      <TextInput 
        placeholder='e.g. abdc@gmail.com' 
        style={styles.input1}
        onChangeText={(value) => setName(value)} />

      <Text style={styles.subTitle2}> Enter password:</Text>
      <TextInput 
        placeholder='password123' 
        style={styles.input2}
        onChangeText={(value) => setAge(value)} />
      <Button title = 'go to images' onPress={pressHandler}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTitle: {

    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }, 
  subTitle1: {
  
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },  
  subTitle2: {
    
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15, 
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: { 
    
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  input2: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
