import {ScrollView, Text} from 'react-native'


export  function Registration()
{

    // navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Profile' }],//The reset method lets us replace the navigator state with a new state:
    //   });
    
    return (
        <ScrollView>
        {/* // <Registration> */}
            <Text>Registration</Text>
        {/* // </Registration> */}
        
        </ScrollView>
    )
}
{/* <Button onPress={() => goBack()} title="Go back from ProfileScreen" /> */}
// navigation.navigate({ name: SCREEN, key: SCREEN_KEY_A });

//   <Button
//   title="Go to Details... again"
//   onPress={() => navigation.push('Details')}
// />