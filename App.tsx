import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import useCustomFonts from './assets/fonts/useFonts';
import { AuthContext, AuthProvider } from './src/contexts/AuthContext';
import BottomTabNavigation from './src/routes/private/BottomTabNavigation';
import StackNavigation from './src/routes/public/StackNavigation';

export default function App() {
  const [fontsLoaded] = useCustomFonts();
  const { isAuth } = useContext(AuthContext);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        {isAuth ? <BottomTabNavigation /> : <StackNavigation />}
      </NavigationContainer>
    </AuthProvider>
  );
}
