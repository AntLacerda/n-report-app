import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import useCustomFonts from './assets/fonts/useFonts';
import PublicStackNavigation from './src/routes/public';

export default function App() {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <PublicStackNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    marginTop: 20,
    padding: 15,
  },
});
