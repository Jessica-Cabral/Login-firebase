import { View, Text, TouchableOpacity, Image } from 'react-native';
import Botao from '../components/Botao';
import Input from '../components/Input';
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function TelaLogin({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function efetuarLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('TelaPrincipal')
    } catch (error) {
      alert("Erro ao efetuar login firebas")
      
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
      <Text style={styles.titulo}>Login</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail}/>
      <Input placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Botao 
        titulo="Entrar" 
        onPress={efetuarLogin}
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