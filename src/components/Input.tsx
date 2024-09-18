import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function Input({label, onChangeText, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#888" // Placeholder için açık gri
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    backgroundColor: '#f9f9f9',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
});
