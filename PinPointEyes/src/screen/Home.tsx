import { Button, ScrollView } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Sigin from './Sigin';
import Registration from './Registration'

// export interface NavigationAll {
//     navigation:NativeStackNavigationProp<ParamListBase>;
// }
// export const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
// const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
export  function Home()
{
    const navigation = useNavigation();
    return (
        <ScrollView>
            <Button title="Go to Sig in" onPress={()=>{navigation.navigate('Sigin')}}/>
            <Button title="Go to Registration" onPress={()=>{navigation.navigate('Registration')}}/>
        </ScrollView>
    )
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });