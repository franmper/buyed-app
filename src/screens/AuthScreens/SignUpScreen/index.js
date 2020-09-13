import React, {useState} from 'react';
import {View, Text, TextInput, Modal, Pressable} from 'react-native';
import {useStoreActions} from 'easy-peasy';

import {signUp} from '../../../services/auth'

import AuthButton from '../../../components/Buttons/AuthButton';
import Loading from '../../../components/Loading'

import {styles} from '../../../styles/styles';
import * as colors from '../../../utils/colors'

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const setUser = useStoreActions(state => state.user.setUser)

  const handlerSignUp = async () => {
    setIsLoading(true);
    const payload = {
      username,
      email,
      password
    }
    const signUpResponse = await signUp(payload);
    if(signUpResponse.error !== null){
      setIsError(true);
      return setIsLoading(false)
    }
    setUser(signUpResponse.user)
    setIsLoading(false)
  }

  if(isLoading) return <Loading />

  return (
    <View style={styles.authContainer}>
      <View style={styles.authTitleContainer}>
        <Text style={styles.authTitleText}>BUYED</Text>
      </View>
      <View style={styles.authInputsContainer}>
        <View style={styles.authInputContainer}>
          <Text style={styles.authInputLabel}>Nombre de usuario</Text>
          <TextInput
            style={styles.authTextInput}
            placeholder={'Ingrese un nombre de usuario.'}
            textContentType={'username'}
            onChangeText={value => setUsername(value)}
            value={username}
          />
        </View>
        <View style={styles.authInputContainer}>
          <Text style={styles.authInputLabel}>Correo Eléctronico</Text>
          <TextInput
            style={styles.authTextInput}
            placeholder={'Ingrese un correo eléctronico.'}
            textContentType={'emailAddress'}
            onChangeText={value => setEmail(value)}
            value={email}
          />
        </View>
        <View style={styles.authInputContainer}>
          <Text style={styles.authInputLabel}>Contraseña</Text>
          <TextInput
            style={styles.authTextInput}
            secureTextEntry={hidePassword}
            placeholder={'Ingrese su contraseña.'}
            textContentType={'password'}
            onChangeText={value => setPassword(value)}
            value={password}
          />
        </View>
      </View>
      <AuthButton
        buttonLevel="primary"
        onPress={handlerSignUp}
        text="Registrate"
      />
      <Modal
        animationType="fade"
        hardwareAccelerated={true}
        presentationStyle="overFullScreen"
        transparent={true}
        visible={isError}
      >
        <View style={{justifyContent: "flex-start", alignItems: "center", flexDirection: "row", width: "100%", height: 60, backgroundColor: colors.red, padding: 30}}>
          <Text style={{fontSize: 15, color: colors.ligthYellow}}>El email o el nombre de usuario ya existe.</Text>
          <Pressable style={{marginLeft: 45}} onPress={() => setIsError(false)}><Text style={{fontSize: 15, padding: 30}}>x</Text></Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default SignUpScreen;
