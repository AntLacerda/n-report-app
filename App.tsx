import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Login from './src/screens/Login';
import useCustomFonts from './assets/fonts/useFonts';

export default function App() {
  const [fontsLoaded] = useCustomFonts();

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Login/>
      </SafeAreaView>
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
