import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';

export default function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hoşgeldiniz</Text>
      <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
