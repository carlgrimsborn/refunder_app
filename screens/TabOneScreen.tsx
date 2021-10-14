import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useActions, useState } from '../overmind';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const { counter } = useState();
  const { increment, decrement } = useActions();
  return (
    <View style={styles.container}>
      <View>
        <Button title="Increment" onPress={() => increment(1)}></Button>

        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              padding: 8,
              textAlign: 'center',
            }}
          >
            {counter.toString()}
          </Text>
        </View>

        <Button title="Decrement" onPress={() => decrement(1)}></Button>
      </View>
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
