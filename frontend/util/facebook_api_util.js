const APP_ID = '497811640605404'

export async function facebookLogIn() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
      permissions: ['public_profile', 'user_birthday'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?fields=name,birthday&access_token=${token}`);

    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } else if (type === 'cancel') {
    console.log('cancelled')
  }
}
