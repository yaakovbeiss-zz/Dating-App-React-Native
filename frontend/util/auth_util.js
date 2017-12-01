import { AsyncStorage } from 'react-native';

export const SESSION_TOKEN = "SESSION_TOKEN";

export const persistUser = async (session_token) => {
  try {
    await AsyncStorage.setItem(SESSION_TOKEN, session_token);
  } catch (error) {
    console.log(error)
  }
}

export const verifyUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(SESSION_TOKEN)
      .then(res => {
        console.log(res)
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const logOutUser = async () => {
  try {
    await AsyncStorage.removeItem(SESSION_TOKEN);
  } catch (error) {
    console.log(error)
  }
}
