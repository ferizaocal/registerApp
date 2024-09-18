import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
