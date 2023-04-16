/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Platform,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import Navigation from './src/navigation';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const toggleDarkMode = (isColor: boolean) => {
    setIsDarkMode(isColor);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent={Platform.OS === 'android' ? true : false}
          backgroundColor={Platform.OS === 'android' ? 'transparent' : backgroundStyle.backgroundColor}
        />
        <Navigation toggleDarkMode={toggleDarkMode} />
      </SafeAreaView>
    </>
  );
}

export default App;
