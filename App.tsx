import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import useCustomFonts from './assets/fonts/useFonts';
import api from './src/api/api';
import { AuthContext, AuthProvider } from './src/contexts/AuthContext';
import PrivateRoutes from './src/routes/private/PrivateRoutes';
import PublicRoutes from './src/routes/public/PublicRoutes';

function AppContent() {
  const { isAuth, setIsAuth, setUserName, setIsAdmin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const user = (await api.get("/api/v1/users/profile")).data;
          setUserName(user.name);
          setIsAuth(true);
          setIsAdmin(user.Permission.role === 'admin')
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
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
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
      <StatusBar backgroundColor='#292929' style='inverted'/>
      <AppContent />
    </AuthProvider>
  );
}
