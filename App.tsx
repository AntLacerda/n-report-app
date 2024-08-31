import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import useCustomFonts from './assets/fonts/useFonts';
import PublicStackNavigation from './src/routes/public/PublicStackNavigation';

export default function App() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PublicStackNavigation />
    </NavigationContainer>
  );
}
