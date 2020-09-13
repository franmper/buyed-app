import React, {useState} from 'react';
import {View, Text, TextInput, Modal, Pressable} from 'react-native';
import {useStoreActions} from 'easy-peasy';
import {signIn} from '../../../services/auth';

import AuthButton from '../../../components/Buttons/AuthButton';
import Loading from '../../../components/Loading';

import {styles} from '../../../styles/styles';
import * as colors from '../../../utils/colors';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setUser = useStoreActions(state => state.user.setUser);

  const handlerSignIn = async () => {
    setIsLoading(true);
    const payload = {
      email,
      password,
    };
    const signInResponse = await signIn(payload);
    if (signInResponse.error !== null) {
      setIsError(true);
      return setIsLoading(false);
    }
    setUser(signInResponse.user);
    setIsLoading(false);
  };

  if (isLoading) return <Loading />;

  return (
    <View style={styles.authContainer}>
      <View style={styles.authTitleContainer}>
        <Text style={styles.authTitleText}>BUYED</Text>
      </View>
      <View style={styles.authInputsContainer}>
        <View style={styles.authInputContainer}>
          <Text style={styles.authInputLabel}>Correo Eléctronico</Text>
          <TextInput
            style={styles.authTextInput}
            placeholder={'Ingrese su correo eléctronico.'}
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
        onPress={handlerSignIn}
        text="Inicia Sesión"
      />
      <AuthButton
        buttonLevel="secondary"
        onPress={() => navigation.navigate('SignUp')}
        text="Registrate"
      />
      <Modal
        animationType="fade"
        hardwareAccelerated={true}
        presentationStyle="overFullScreen"
        transparent={true}
        visible={isError}
        style={{
          width: '100%',
          height: 60,
        }}
        >
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: 60,
            backgroundColor: colors.red,
            padding: 30,
          }}>
          <Text style={{fontSize: 15, color: colors.ligthYellow}}>
            Hubo un error al iniciar sesión.
          </Text>
          <Pressable
            style={{marginLeft: 110}}
            onPress={() => setIsError(false)}>
            <Text style={{fontSize: 15, padding: 30}}>x</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default SignInScreen;
