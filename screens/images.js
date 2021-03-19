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
      ]);

  return (
    <View style={globalStyles.container}>
        <FlatList
  
    numColumns={3}

    data={images}
    renderItem={ ({ item, index }) => ( 
        <TouchableOpacity>
      <Image source={item} // Use item to set the image source
        key={index} // Important to set a key for list items
        style={{
          width:75,
          height:75,
          borderWidth:2,
          borderColor:'#d35647',
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