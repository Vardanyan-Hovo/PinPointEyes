import { Button, ScrollView } from "react-native";
import Sigin from './Sigin'
import {Registration} from './Registration'

export  function Home()
{
    return (
        <ScrollView>
            <Button title="Go to Sig in" onPress={Sigin}/>
            <Button title="Go to Registration" onPress={Registration}/>
        </ScrollView>
    )
}