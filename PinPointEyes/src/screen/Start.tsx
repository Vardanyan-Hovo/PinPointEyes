import { Button, ScrollView } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Sigin from './Sigin';
import Registration from './Registration'

export interface NavigationAll {
    navigation:NativeStackNavigationProp<ParamListBase>;
}
// export const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

export  function Start()
{
    // const handleNavigateSigin = () => {
    //     navigation.navigate('Sigin')
    // }
    // const handleNavigateRegistration = () =>{
    //     navigation.navigate('Registration')
    // }
    return (
        <ScrollView>
            <Button title="Go to Sig in" onPress={Sigin}/>
            <Button title="Go to Registration" onPress={Registration}/>
        </ScrollView>
    )
}