import React, { useState } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View,
} from 'react-native';

const MESSAGE = 'Message';

export default () => {
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    setCounter((counter % MESSAGE.length) + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{MESSAGE.substring(0, counter)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    borderColor: 'lightblue',
    borderWidth: 2,
    padding: 5,
  },
  buttonText: {
    color: 'lightblue',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
  },
});
