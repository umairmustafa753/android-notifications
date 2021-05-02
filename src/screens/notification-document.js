import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {handleDisplayNotification} from '../services/notification.android';
import {handlePickDocument} from '../services/document.android';
import styles from './styles';

const NotificationsAndDocumet = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.wrapper]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity
        onPress={() =>
          handleDisplayNotification('Test', 'This is test message')
        }>
        <Text>Send Notifcation</Text>
      </TouchableOpacity>
      <View style={styles.margin} />
      <TouchableOpacity onPress={() => handlePickDocument()}>
        <Text>Pick Document</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationsAndDocumet;
