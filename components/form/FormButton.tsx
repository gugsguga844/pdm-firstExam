import { Colors } from "@/consts/colors";
import { Spacing } from "@/consts/spacing";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {
  title: string;
  testID: string;
} & TouchableOpacityProps;

export default function FormButton({ title, testID, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.button} source={require('@/assets/images/carbutton2.png')} resizeMode="contain" testID="button-image" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.md,
    borderRadius: 2,
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  button: {
    width: 80,
    height: 80,
  }
});
