import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

const Notifcations = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.wrapper]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity>
        <Text>Send Notifcations</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifcations;
