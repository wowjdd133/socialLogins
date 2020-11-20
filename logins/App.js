/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const App = () => {

  // const [userInfo, setUserInfo] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: "373393097316-ksvgl216pqj0a3dct8g0s1i8f4h78r2u.apps.googleusercontent.com",
  //     offlineAccess: true,
  //     hostedDomain: '',
  //     loginHint: '',
  //     forceCodeForRefreshToken: true,
  //     accountName: '',
  //     iosClientId: "373393097316-ksvgl216pqj0a3dct8g0s1i8f4h78r2u.apps.googleusercontent.com",
  //   })
  // },[]);

  // const signIn = async () => {
  //   try {
  //     setIsLoading(true);
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setUserInfo(userInfo);
  //   } catch (err) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log("cancel");
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('이미 하는중')
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.error('구글 서비스 안함');
  //       // play services not available or outdated
  //     } else {
  //       console.error(err);
  //       // some other error happened
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  return (
    <>
     <SafeAreaView style={styles.container}>
      {/* <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={isLoading}
      /> */}
      <LoginButton
        onLoginFinished={
          async (err,result) => {
            if(err){
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              try{
                const data = await AccessToken.getCurrentAccessToken()
                console.log(data.accessToken.toString());
              }catch(err){
                console.error(err);
              }
            }
          }
        }
        onLogoutFinished={() => console.log("logout")}
      />
     </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default App;
