import { View , Text} from 'react-native';


export default function ProfileScreen() {
    return(
        <View>
            <Text>Hello Profile</Text>
        </View>
    )
}



// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { View , Text} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// type RootStackParamList = {
//   Home: undefined;
//   Profile: { userId: string };
//   Feed: { sort: 'latest' | 'top' } | undefined;
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
// // type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;

// export default function ProfileScreen({ route, navigation }: Props) {
//     return(
//         <View>
//             <Text>Hello Profile</Text>
//         </View>
//     )
// }