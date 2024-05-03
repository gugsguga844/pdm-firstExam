import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Button, Touchable } from "react-native";
import React from "react";
import { Link, Stack, useNavigation, useRouter } from "expo-router";
import { Colors } from "@/consts/colors";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { CommonActions } from '@react-navigation/native';

type HeaderWithSearchBar = {
  headerBackVisible?: boolean;
};

export default function HeaderForAbout({
  headerBackVisible = true,
}: HeaderWithSearchBar) {
  const router = useRouter();


  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();
    const onPress = () => {
      const options = ['Sair'];
      const destructiveButtonIndex = 0;
      const cancelButtonIndex = 1;
  
      showActionSheetWithOptions({
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      }, (selectedIndex: number) => {
        switch (selectedIndex) {
          case 0:
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
          <TouchableOpacity onPress={onPress}>
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
