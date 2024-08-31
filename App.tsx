import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import useCustomFonts from './assets/fonts/useFonts';
import BottomTabNavigation from './src/routes/private/BottomTabNavigation';
import StackNavigation from './src/routes/public/StackNavigation';

export default function App() {
  const [fontsLoaded] = useCustomFonts();
  const [isAuth, setIsAuth] = useState(true);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {isAuth ? <BottomTabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
}
