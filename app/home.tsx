import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";
import { Spacing } from "@/consts/spacing";
import FullScreen from "@/components/containers/FullScreen";
import data from "@/services/data";
import HeaderForHome from "@/components/headers/HeaderForHome";
import { Colors } from "@/consts/colors";

export default function home() {
  const sections = data.reduce((acc, item) => { 
    const existingIndex = acc.findIndex(section => section.title === item.brand); 
    if (existingIndex !== -1) {
      acc[existingIndex].data.push(item);
    } else {
      acc.push({ title: item.brand, data: [item] });
    }
    return acc;
  }, []);

  return (
    <FullScreen>
      <HeaderForHome headerBackVisible={true} />

      <View style={styles.titleView}>
      <Text style={styles.title}>Modelos Disponíveis</Text>
      </View>

      <View style={styles.categories}>

        <SectionList
          style={styles.SectionList}
          sections={sections}
          renderItem={({ item }) => (
            <Text style={styles.text}>
              {item.model} {item.year}
            </Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      

    </FullScreen>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    marginBottom: 20,
    marginLeft: 10,
  },
  titleView: {
    marginTop: 80,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.md,
    marginTop: 20,
  },
  SectionList: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  sectionHeader: {
    backgroundColor: Colors.primary,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  sectionHeaderText: {
    color: "white",
    fontWeight: 'bold',
  },
});
