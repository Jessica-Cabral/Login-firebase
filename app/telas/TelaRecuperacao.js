import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import Botao from '../components/Botao';
import Input from '../components/Input';
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function TelaRecuperacao({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function recuperarSenha() {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Atenção!", "Senha enviada para o email cadastrado.");
      setEmail("")
      navigation.navigate('TelaLogin')
    } catch (error) {
      Alert.alert("Atenção!", "E-mail não encontrado!");
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.nomeSistema}>Chama Serviço</Text>
      <Text style={styles.titulo}>Recupere sua senha </Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail}/>
      <Botao 
        titulo="Recuperar senha" 
        onPress={recuperarSenha}
      />
      <TouchableOpacity onPress={() => navigation.navigate('TelaRegistro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nomeSistema: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#9c88ff',
  },
  link: {
    color: '#9c88ff',
    textAlign: 'center',
    marginTop: 15,
  },
};