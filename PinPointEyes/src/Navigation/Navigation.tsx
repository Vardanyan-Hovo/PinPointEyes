import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Start} from '../screen/Start';
import  Registration  from '../screen/Registration';
import ProfileScreen from '../screen/ProfileScreen'
import Sigin from '../screen/Sigin';

const Stack = createNativeStackNavigator();
// const Navigation = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home" screenOptions={{
//                                                             headerTintColor: 'white',
//                                                             headerStyle: { backgroundColor: 'tomato' },
//                                                           }}>
//               <Stack.Screen name="Home" component={Home} options={{
//                                                                     title: 'Awesome app',
//                                                                   }}/>
//               {/* <Stack.Screen name="Profile" component={ProfileScreen} options={{
//                                                                     title: 'My profile',
//                                                                   }}/> */}
//               <Stack.Screen name="Registration" component={Registration} options={{
//                                                                       gestureEnabled: false,
//                                                                     }}/>
//               <Stack.Screen name="Sigin" component={Sigin} />
//     </Stack.Navigator>
//   );
// };
// export default Navigation;

{/* <Stack.Group
  screenOptions={({ navigation }) => ({
                                      presentation: 'modal',
                                      headerLeft: () => <Button title='go back' onPress={navigation.goBack} />,
                                    })}
  >

</Stack.Group> */}








const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{
                                                                  headerTintColor: 'white',
                                                                  headerStyle: { backgroundColor: 'tomato' },
                                                                }}>
      <Stack.Screen name="Start" component={Start} options={{
                                                                    title: 'Awesome app',
                                                                  }}/>
      <Stack.Screen name="Sigin" component={Sigin} options={{
                                                        gestureEnabled: false,
                                                      }}/>
      <Stack.Screen name="Registration" component={Registration} options={{
                                                        gestureEnabled: false,
                                                      }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{
                                                            title: 'My profile',
                                                          }}/>
    </Stack.Navigator>
  );
};

export default NavigationStack;