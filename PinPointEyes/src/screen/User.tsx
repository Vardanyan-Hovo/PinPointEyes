// import { useWindowDimensions } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   const dimensions = useWindowDimensions();

//   const isLargeScreen = dimensions.width >= 768;

//   return (
//     <Drawer.Navigator
//       defaultStatus="open"
//       screenOptions={{
//         drawerType: isLargeScreen ? 'permanent' : 'back',
//         drawerStyle: isLargeScreen ? null : { width: '100%' },
//         overlayColor: 'transparent',
//       }}
//     >
//       {/* Screens */}
//     </Drawer.Navigator>
//   );
// }




// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }