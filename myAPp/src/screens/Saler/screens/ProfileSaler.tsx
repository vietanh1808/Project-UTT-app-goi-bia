import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {COLOR_MAIN_TOPIC} from '../../../constants';
import auth from '@react-native-firebase/auth';

const ProfileSaler = () => {
  const onLogout = useCallback(async () => {
    await auth().signOut();
  }, []);

  return (
    <View style={styles.body}>
      <Text>Profile Screen</Text>
      <Pressable onPress={onLogout} style={styles.button}>
        <Text style={styles.textButton}>Đăng xuất</Text>
      </Pressable>
    </View>
  );
};

export default ProfileSaler;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: 100,
    borderRadius: 10,
    backgroundColor: COLOR_MAIN_TOPIC,
  },
  textButton: {
    color: '#fff',
  },
});
