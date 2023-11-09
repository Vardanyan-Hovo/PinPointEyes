import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/Home';
import { Registration } from '../screen/Registration';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screen/ProfileScreen'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();


const Stack = createStackNavigator();

//------------------------------------------------------------------------------------------
// transitionStart
// React.useEffect(() => {
//   const unsubscribe = navigation.addListener('transitionStart', (e) => {
//     // Do something
//   });

//   return unsubscribe;
// }, [navigation]);













//--------------------------------------------------------------------------------------------

{/* <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{
    headerLeft: (props) => (
      <MyButton
        {...props}
        onPress={() => {
          // Do something
        }}
      />
    ),
  }}
/> */}
//---------------------------------------------------------------------------------------------------------------------
// const Navigation = () => {
//   return (
//     <Stack.Navigator initialRouteName='Home'       screenOptions={{
//                                                           headerMode: 'screen',
//                                                           headerTintColor: 'white',
//                                                           headerStyle: { backgroundColor: 'tomato' },
//                                                         }}>
//       <Stack.Screen   name="Home" component={Home} options={{ title: 'Home Overview' }}  />
//       <Stack.Screen name="Registration" component={Registration} options={{ title: 'Registration Overview' }} />
//     </Stack.Navigator>
//   );
// };



type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

//---------------------------------------------------------------------------------------------------------------------
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'> ;

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={ProfileScreen} {this.Props}/>
      <Stack.Group
        screenOptions={({ navigation }) => ({
                                            presentation: 'modal',
                                            headerLeft: () => <CancelButton onPress={navigation.goBack} />,
                                          })}
        >
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Share" component={Share} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default Navigation;