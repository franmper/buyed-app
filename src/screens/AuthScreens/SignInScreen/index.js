import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {useStoreActions} from 'easy-peasy';
import { styles } from '../../../styles/styles';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signedIn = useStoreActions(state => state.user.signedIn);

  return (
    <View style={styles.cotainerAuth}>
      <View>
        <Text>SignInScreen</Text>
      </View>
      <View>
        <TextInput
          style={{height: 50, borderColor: 'gray', borderWidth: 1}}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={{height: 50, borderColor: 'gray', borderWidth: 1}}
          onChangeText={value => setPassword(value)}
        />
      </View>
      <View>
        <Pressable onPress={() => signedIn({email, password})}>
          <Text>SignIn</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;
