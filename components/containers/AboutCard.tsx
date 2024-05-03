import { View, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import { Colors } from "@/consts/colors";

export default function AboutCard({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.primary,
    backgroundColor: "black",
    maxWidth: "90%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",

  },
});
