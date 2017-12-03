import { AsyncStorage } from 'react-native';

export const SESSION_TOKEN = "SESSION_TOKEN";

export const persistUser = async (user) => {
  try {
    await AsyncStorage.setItem(SESSION_TOKEN, user);
  } catch (error) {
    console.log(error)
  }
}

export const checkForPersistedUser = async () => {
  try {
    let user = await AsyncStorage.getItem(SESSION_TOKEN);
    return user;
  } catch (error) {
    console.log(error)
  }
}

// export const checkForPersistedUser = () => {
//   return new Promise((resolve, reject) => {
//     AsyncStorage.getItem(SESSION_TOKEN)
//       .then(user => {
//         if (user !== null) {
//           resolve(user);
//         } else {
//           resolve(false);
//         }
//       })
//       .catch(err => reject(err));
//   });
// };

export const verifyUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(SESSION_TOKEN)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const signoutOutUser = async () => {
  try {
    await AsyncStorage.removeItem(SESSION_TOKEN);
  } catch (error) {
    console.log(error)
  }
}
