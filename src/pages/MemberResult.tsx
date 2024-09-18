import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function MemberResult({route}) {
  const {user} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.header}>Üye Bilgileri</Text>
        <Text style={styles.label}>
          Üye Adı: <Text style={styles.value}>{user.name}</Text>
        </Text>
        <Text style={styles.label}>
          Üye Soyadı: <Text style={styles.value}>{user.surname}</Text>
        </Text>
        <Text style={styles.label}>
          Üye Yaşı: <Text style={styles.value}>{user.age}</Text>
        </Text>
        <Text style={styles.label}>
          Üye Maili: <Text style={styles.value}>{user.mail}</Text>
        </Text>
        <Text style={styles.label}>
          Üye Memleketi: <Text style={styles.value}>{user.hometown}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#555',
  },
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
});
