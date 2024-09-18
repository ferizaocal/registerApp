import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, View, Text} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

export default function MemberSign({navigation}) {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [mail, setMail] = useState(null);
  const [hometown, setHometown] = useState(null);

  function handleSubmit() {
    if (!name || !surname || !age || !mail || !hometown) {
      Alert.alert('Üye Kaydı', 'Bilgiler boş bırakılamaz!');
      return;
    }
    const user = {name, surname, age, mail, hometown};
    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Üye Kayıt Formu</Text>
      <View style={styles.inputContainer}>
        <Input
          label="Üye Adı"
          placeholder="Üyenin ismini giriniz..."
          onChangeText={setName}
          style={styles.input}
        />
        <Input
          label="Üye Soyadı"
          placeholder="Üyenin soyismini giriniz..."
          onChangeText={setSurname}
          style={styles.input}
        />
        <Input
          label="Üye Yaşı"
          placeholder="Üyenin yaşını giriniz..."
          onChangeText={setAge}
          style={styles.input}
        />
        <Input
          label="Üye E-postası"
          placeholder="Üyenin adresini giriniz..."
          onChangeText={setMail}
          style={styles.input}
        />
        <Input
          label="Üye Memleketi"
          placeholder="Üyenin memleketini giriniz..."
          onChangeText={setHometown}
          style={styles.input}
        />
      </View>
      <Button
        text="Kaydı Tamamla"
        onPress={handleSubmit}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
