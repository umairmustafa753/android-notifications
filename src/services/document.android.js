import {Alert} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

const handlePickDocument = async () => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
    Alert.alert(
      res.uri,
      res.type, // mime type
      res.name,
      res.size,
    );
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      Alert.alert('user cancelled');
    } else {
      throw err;
    }
  }
};

export {handlePickDocument};
