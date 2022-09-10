import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ToastProvider} from 'react-native-toast-notifications';
import {deviceHeight} from './utils/calc';
import Home from './pages/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ToastProvider>
      <SafeAreaView style={{minHeight: deviceHeight, ...backgroundStyle}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView>
          <Home />
        </ScrollView>
      </SafeAreaView>
    </ToastProvider>
  );
};

export default App;
