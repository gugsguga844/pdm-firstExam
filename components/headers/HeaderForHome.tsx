import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Touchable } from "react-native";
import React from "react";
import { Link, Stack, useRouter } from "expo-router";
import { Colors } from "@/consts/colors";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

type HeaderWithSearchBar = {
  headerBackVisible?: boolean;
};

export default function HeaderForHome({
  headerBackVisible = true,
}: HeaderWithSearchBar) {
  const router = useRouter();

  const { showActionSheetWithOptions } = useActionSheet();

    const onPress = () => {
      const options = ['Sobre', 'Sair'];
      const destructiveButtonIndex = 1;
      const cancelButtonIndex = 2;
  
      showActionSheetWithOptions({
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      }, (selectedIndex: number) => {
        switch (selectedIndex) {
          case 0:
            router.push('/about');
            break;
  
          case 1:
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/");
            break;
  
          case cancelButtonIndex:
        }});
    }

  return (
    <Stack.Screen
      options={{
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={onPress} testID="action-button1">
            <FontAwesome5 name="bars" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerStyle: styles.headerStyle,
        headerTitle: "x1Cars Co",
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.primary,
    padding: 8,
  },
});
