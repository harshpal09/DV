import { Button, SafeAreaView, StyleSheet, Text, View, ActivityIndicator, Image, Platform, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  AuthNavigator,
  AdminNavigator,
  EmployeeNavigator,
  AppNavigator,
} from '../../navigation/Index';
import { useNavigation } from '@react-navigation/native';
import {
  THEME_COLOR,
  globalStyles,
  width,
  height,
  StyleSheets,
} from '../../components/Common/Styles';
import {
  DarkTextLarge,
  MainContainer,
  ProfileContainer,
  StyledButton,
  StyledTextInput,
} from '../../components/Common/StyledComponent';
import { MMKV } from 'react-native-mmkv';
import { useDispatch } from 'react-redux';
import {
  setIsAdmin,
  setIsAuthenticated,
} from '../../store/modules/UserDetailsSlice';
import Test from '../../components/Common/Test'
import { fontFamilyVar, imagePaths } from '../../store/utils/CommonVariables';


const storage = new MMKV();

export default function LoginScreen() {
  const navigation = useNavigation();
  const [focusInEmail, setFocusInEmail] = useState(false);
  const [focusInPass, setFocusInPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
    error: '',
  });
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const handleClickEmail = event => {
    // event.persist();
    const emailValue = event.nativeEvent.text.toLowerCase();
    // console.log("email => ",emailValue)
    setEmail(emailValue);
    setError(prev => ({ ...prev, email: '' }));
    setError(prev => ({ ...prev, error: '' }));
  };

  const handleClickPass = event => {
    // event.persist();
    const passwordValue = event.nativeEvent.text;
    setPassword(passwordValue);
    setError(prev => ({ ...prev, password: '' }));
    setError(prev => ({ ...prev, error: '' }));
  };
  const onSubmit = async () => {
    try {
      setToggle(true); // Show the activity indicator
  
      if (email === '') {
        setError(prev => ({ ...prev, email: 'Please enter your email' }));
        return;
      }
      if (password === '') {
        setError(prev => ({ ...prev, password: 'Please enter your Password' }));
        return;
      }
  
      let isAdmin = false;
      if (email.toLowerCase().includes('admin')) {
        isAdmin = true;
      }
      const userDetails = {
        name: 'Harsh pal',
        isAdmin: isAdmin,
        isAuthenticated: true,
        email: email,
        password: password,
      };
  
      // Simulating asynchronous operation with a setTimeout
      setTimeout(() => {
        storage.set('userDetails', JSON.stringify(userDetails));
        dispatch(setIsAuthenticated(true));
        dispatch(setIsAdmin(isAdmin));
        setToggle(false); // Hide the activity indicator
      }, 2000); // Delay of 2 seconds
  
    } catch (err) {
      setError(prev => ({ ...prev, error: err }));
      setToggle(false); // Hide the activity indicator in case of error
    }
  };
  
  // console.log('toggle => ',   StyleSheets());
  return (
    <MainContainer style={{ backgroundColor: THEME_COLOR }}>
      <ImageBackground style={{ flex: 1, width: '100%',}} source={imagePaths.BASE_TEXTURE}>
        <View style={{width:'100%',top:50}}>
          <View style={[{ width: '100%', backgroundColor: 'transparent' }, globalStyles.flexBox]}>
            <Image source={require('../../assets/DV_LOGO.png')} resizeMode='contain' style={{ width: width, height: 120, backgroundColor: 'transparent', }} />
          </View>
          <View style={{ marginVertical: 30, width: '100%', height: 0.5, backgroundColor: THEME_COLOR }} />

          <ProfileContainer
            style={[{ width: '85%', marginTop: null, backgroundColor: 'transparent', borderColor: null, borderWidth: null }, globalStyles.flexBox]}>
            <DarkTextLarge
              style={{
                marginVertical: 5,
                fontSize: 18,
                fontWeight: '600',
                fontFamily: fontFamilyVar.BASKER_REGULAR,
              }}>
              Welcome Back!
            </DarkTextLarge>
            <DarkTextLarge
              style={{
                marginVertical: 5,
                fontSize: 10,
                fontWeight: '500',
                color: 'grey',
                fontFamily: fontFamilyVar.BASKER_ITALIC,
              }}>
              Please enter your Email Address & Password to Sign In!
            </DarkTextLarge>
            <StyledTextInput
              style={[{ borderBottomColor: focusInEmail ? THEME_COLOR : 'grey' }]}
              placeholder="Email"
              placeholderTextColor={focusInEmail ? THEME_COLOR : 'grey'}
              onFocus={() => setFocusInEmail(true)}
              onBlur={() => setFocusInEmail(false)}
              onChange={handleClickEmail}
              defaultValue={email.toLowerCase()}
            />
            {error.email != '' && (
              <Text style={{ fontSize: 13, color: 'red' }}>{error.email}</Text>
            )}
            <StyledTextInput
              style={[{ borderBottomColor: focusInPass ? THEME_COLOR : 'grey' }]}
              placeholder="Password"
              placeholderTextColor={focusInPass ? THEME_COLOR : 'grey'}
              onFocus={() => setFocusInPass(true)}
              onBlur={() => setFocusInPass(false)}
              onChange={handleClickPass}
              secureTextEntry={true}
              autoCorrect={false}
            />
            {error.password != '' && (
              <Text style={{ fontSize: 13, color: 'red' }}>{error.password}</Text>
            )}
            <StyledButton disabled={toggle} style={[globalStyles.flexBox]} onPress={onSubmit}>
              {toggle ? (
                <ActivityIndicator size={'small'} color={'white'}/>
              ) : (
                <Text style={{ color: 'white', fontWeight: '800', fontSize: 17 }}>
                  Sign In
                </Text>
              )}
            </StyledButton>
            {error.error != '' && (
              <Text style={{ fontSize: 13, color: 'red' }}>{error.error}</Text>
            )}
          </ProfileContainer>
          <View style={{ marginVertical: 20, width: '100%', height: 0.5, backgroundColor: THEME_COLOR }} />
        </View>
      </ImageBackground>
    </MainContainer>
  );
}

const styles = StyleSheet.create({});
