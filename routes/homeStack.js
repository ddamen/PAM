import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import home from '../screens/home';
import images from '../screens/images';
import thankyou from '../screens/thankyou'

const screens = {
    home: {
        screen: home
    },
    images: {
        screen: images
    }, 
    thankyou:{
        screen: thankyou
    },

} 


const HomeStack = createStackNavigator(screens); 

export default createAppContainer(HomeStack);