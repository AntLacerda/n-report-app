import { NavigationContainer } from '@react-navigation/native';
import useCustomFonts from './assets/fonts/useFonts';
import { AuthProvider, AuthContext } from './src/contexts/AuthContext';
import BottomTabNavigation from './src/routes/private/BottomTabNavigation';
import StackNavigation from './src/routes/public/StackNavigation';
import { useContext } from 'react';

function AppContent() {
  const { isAuth } = useContext(AuthContext);

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
