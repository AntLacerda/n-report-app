import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import useCustomFonts from './assets/fonts/useFonts';
import PrivateBottomTabNavigation from './src/routes/private/PrivateBottomTabNavigation';
import PublicStackNavigation from './src/routes/public/PublicStackNavigation';

export default function App() {
  const [fontsLoaded] = useCustomFonts();
  const [isAuth, setIsAuth] = useState(true);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {isAuth ? <PrivateBottomTabNavigation /> : <PublicStackNavigation />}
    </NavigationContainer>
  );
}
