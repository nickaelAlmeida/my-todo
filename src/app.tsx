/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './components/loading';
import { Home } from './pages/home';
import { standard } from './themes';

export function App () {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <ThemeProvider theme={standard}>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
