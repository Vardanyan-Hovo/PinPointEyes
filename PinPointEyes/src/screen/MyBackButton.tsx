import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}




// class MyBackButton extends React.Component {
//     render() {
//       // Get it from props
//       const { navigation } = this.props;
//     }
//   }
  
//   // Wrap and export
//   export default function(props) {
//     const navigation = useNavigation();
  
//     return <MyBackButton {...props} navigation={navigation} />;
//   }
//------------------------------------------------------------------------------------------------
// import * as React from 'react';
// import { Text } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// function MyText() {
//   const route = useRoute();

//   return <Text>{route.params.caption}</Text>;
// }


//------------------------------------------------------------------------------------------------
// function Profile() {
//     const routesLength = useNavigationState(state => state.routes.length);
  
//     return <Text>Number of routes: {routesLength}</Text>;
//   }

// const index = useNavigationState(state => state.index);
// const state = useNavigationState(state => state);

//------------------------------------------------------------------------------------------------

// class Profile extends React.Component {
//     render() {
//       // Get it from props
//       const { routesLength } = this.props;
//     }
//   }
  
//   // Wrap and export
//   export default function(props) {
//     const routesLength = useNavigationState(state => state.routes.length);
  
//     return <Profile {...props} routesLength={routesLength} />;
//   }