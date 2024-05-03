import { StyleSheet, Image, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";
import { Spacing } from "@/consts/spacing";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    if (username == "teste" && password == "123") {
      router.push("/home");
    }
    else {
      Alert.alert("Erro", "teste, 123");
    }
  };

  return (
    <FullScreen>
      
      <Image style={styles.logo} source={require('@/assets/images/logo_trial-test.png')} resizeMode="contain" />
      
      <Card>
        <FormInput
          label="Teste"
          value={username}
          onChangeText={setUsername}
        />
        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <FormButton onPress={handleLogin} title="Hora de Acelerar!" />
      </Card>
      
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  registerLink: {
    marginTop: Spacing.md,
    fontSize: 12,
    textAlign: "center",
  },
  logo: {
    marginBottom: 50,
    width: 200,
    height: 200,
  },
});
