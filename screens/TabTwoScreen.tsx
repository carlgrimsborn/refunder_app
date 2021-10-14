import * as React from 'react';
import { StyleSheet,Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { useActions, useState } from '../overmind';
import {useNavigation} from '@react-navigation/native'

export default function TabTwoScreen() {
  const { logout } = useActions();
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Button title='Logout' onPress={()=>{
        logout();
      }}></Button>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
