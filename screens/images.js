import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, Flatlist, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';

export default function Home({navigation}) { 
    const pressHandler = () =>{
        navigation.navigate('thankyou')
    }

    const [images, setimages] = useState([
        require('../assets/img1.png'),
        require('../assets/img2.png'),
        require('../assets/img3.png'),
        require('../assets/img4.png'),
        require('../assets/img5.png'),
        require('../assets/img6.png'),
        require('../assets/img7.png'),
        require('../assets/img8.png'),
        require('../assets/img9.png'),
        require('../assets/img10.png'),
        require('../assets/img11.png'),
        require('../assets/img12.png'),
        require('../assets/img13.png'),
        require('../assets/img14.png'),
        require('../assets/img15.png'),
        require('../assets/img16.png'),
      ]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.welcomeTitle}>Select the photo that best captures how you feel right now:</Text>    
        <FlatList
  
    numColumns={4}

    data={images}
    renderItem={ ({ item, index }) => ( 
        <TouchableOpacity onPress ={pressHandler}>
      <Image source={item} // Use item to set the image source
        key={index} // Important to set a key for list items
        style={{
          width:75,
          height:75,
          borderWidth:2,
          borderColor: '#fff',
          resizeMode:'contain',
          margin:8
        }}
      />
      </TouchableOpacity>
    )}
  />

      <Button title= 'select photo' onPress={pressHandler}/>
    </View>
  );
}
const styles = StyleSheet.create({
  welcomeTitle: { 
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },  
 
  
});
