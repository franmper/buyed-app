import React, {useState, useEffect} from 'react';
import BuyedRoutes from '../../routes/BuyedStack';
import AuthRoutes from '../../routes/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Loading from '../../components/Loading';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  const userToken = useStoreState(state => state.user.user.jwt)
  const isSignedIn = useStoreState(state => state.user.isSignedIn)
  const checkUserToken = useStoreActions(state => state.user.checkToken)

  useEffect(() => {
    checkUserToken(userToken);
    setIsLoading(false)
  }, [])

  if(isLoading === true) return <Loading />

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <BuyedRoutes />
      ) : (
        <AuthRoutes />
      )}
    </NavigationContainer>
  );
};

export default HomeScreen;
