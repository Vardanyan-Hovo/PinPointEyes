import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/Home';
import  Registration  from '../screen/Registration';
import ProfileScreen from '../screen/ProfileScreen'
import Sigin from '../screen/Sigin';
import {Button} from 'react-native'

const Stack = createNativeStackNavigator();


const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
                                                                  headerTintColor: 'white',
                                                                  headerStyle: { backgroundColor: 'tomato' },
                                                                }}>
    <Stack.Screen name="Home" component={Home} options={{
                                                                    title: 'Awesome app',
                                                                  }}/>
    <Stack.Group
          screenOptions={({ navigation }) => ({
                                              presentation: 'modal',
                                              headerLeft: () => <Button title='go back' onPress={navigation.goBack} />,
                                            })}
          >
        <Stack.Screen name="Sigin" component={Sigin} options={{
                                                                gestureEnabled: false,
                                                              }}/>
              <Stack.Screen name="Registration" component={Registration} options={{
                                                                gestureEnabled: false,
                                                          }}/>
    </Stack.Group>
      
      <Stack.Screen name="Profile" component={ProfileScreen} options={{
                                                            title: 'My profile',
                                                          }}/>
    </Stack.Navigator>
  );
};

export default NavigationStack;




// const Stack = createStackNavigator();

//------------------------------------------------------------------------------------------
// transitionStart
// React.useEffect(() => {
//   const unsubscribe = navigation.addListener('transitionStart', (e) => {
//     // Do something
//   });

//   return unsubscribe;
// }, [navigation]);
