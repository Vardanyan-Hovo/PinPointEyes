// When running asynchronous effects such as fetching data from server, 
// it's important to make sure that you cancel the request in the cleanup function
//  (similar to React.useEffect). If you're using an API that doesn't provide a cancellation 
//  mechanism, make sure to ignore the state updates:

import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
// useFocusEffect(
//     React.useCallback(() => {
//       let isActive = true;
  
//       const fetchUser = async () => {
//         try {
//           const user = await API.fetch({ userId });
  
//           if (isActive) {
//             setUser(user);
//           }
//         } catch (e) {
//           // Handle error
//         }
//       };
  
//       fetchUser();
  
//       return () => {
//         isActive = false;
//       };
//     }, [userId])
//   );

//--------------------------------------------------------------------

// function Profile({ userId }) {
//   const [user, setUser] = React.useState(null);

//   useFocusEffect(
//     React.useCallback(() => {
//       const unsubscribe = API.subscribe(userId, user => setUser(user));

//       return () => unsubscribe();
//     }, [userId])
//   );

//   return <ProfileContent user={user} />;
// }