import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../components/Botao";
import Input from "../components/Input";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { doc, setDoc, addDoc, collection } from "firebase/firestore"
import { auth } from "../../firebaseConfig";

export default function TelaRegistro({navigation}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  
  
  async function cadastrarUsuario() {

    if(senha === confirmarSenha){
      try {
        // inserir usuario para autenticacao
        await createUserWithEmailAndPassword(auth, email, senha);

        //inserir usuario no banco de dados id personalizado
        // await setDoc(doc(db,'Usuario', email),
        // {
        //   nome: nome,
        //   email: email,
        // });

         //inserir usuario no banco de dados automatico
         await addDoc(collection(db,'Usuario'),
         {
           nome: nome,
           email: email,
         });
        Alert.alert("Informação:","Usuario cadastrado com sucesso!");
        navigation.navigate('TelaLogin')

      } catch (error) {
        Alert.alert("Atencao:","Erro ao Cadastrar usuario!");
      }
    } else {
      alert("Senha diferente");
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <Input placeholder="Email" 
      value={nome}
      onChangeText={setNome}
      />
      <Input placeholder="Email" 
      value={email}
      onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Input
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}

      />
      <Botao titulo="Criar Conta" onPress={cadastrarUsuario} />
      <TouchableOpacity onPress={() => navigation.navigate("TelaLogin")}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#9c88ff",
  },
  link: {
    color: "#9c88ff",
    textAlign: "center",
    marginTop: 15,
  },
};
