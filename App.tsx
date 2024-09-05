import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import useCustomFonts from './assets/fonts/useFonts';
import api from './src/api/api';
import { AuthContext, AuthProvider } from './src/contexts/AuthContext';
import BottomTabNavigation from './src/routes/private/BottomTabNavigation';
import StackNavigation from './src/routes/public/StackNavigation';

function AppContent() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error("Failed to get token:", error);
        setIsAuth(false);
      }

      setIsLoading(false);
    }

    getToken();
  }, [])

  if (isLoading) {
    return
  }

  return (
    <NavigationContainer>
      {isAuth ? <BottomTabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
