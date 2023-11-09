import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/Navigation/Navigation'

// // Render the app container component with the provider around it
// export default function App() {
//   return (
//     // <Provider store={store}>
//       <NavigationContainer>
//         <NavigationStack />
//       </NavigationContainer>
//     // </Provider>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



export default function App() {
  return (
    <NavigationContainer>

      <NavigationStack/>
    </NavigationContainer>
  )
}