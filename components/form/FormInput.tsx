import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/consts/colors";
import { Spacing } from "@/consts/spacing";

type FormInput = {
  label?: string;
} & TextInputProps;

export default function FormInput({ label, ...rest }: FormInput) {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[styles.container, focus && styles.focusContainer]}>
      {label && (
        <Text style={[styles.label, focus && styles.focus]}>{label}</Text>
      )}
      <TextInput
        {...rest}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[styles.input, rest.style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.md,
    padding: 4,
    borderColor: Colors.primary,
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
  },
  label: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    color: 'white',
  },
  focus: {
    color: "red",
  },
  focusContainer: {
    borderColor: "red",
  },
});
