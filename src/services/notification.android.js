import PushNotification from 'react-native-push-notification';

const handleDisplayNotification = (title, message) => {
  PushNotification.localNotification({
    channelId: 'com.notifications',
    channelName: 'com.notifications',
    channelDescription: 'A channel to categorize your notifications',
    playSound: true,
    soundName: 'default',
    importance: 4,
    vibrate: true,
    title: title,
    message: message,
  });
};

export {handleDisplayNotification};
