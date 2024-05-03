import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FullScreen from '@/components/containers/FullScreen'
import AboutCard from '@/components/containers/AboutCard';
import HeaderForAbout from '@/components/headers/HeaderForAbout';

export default function about() {
  return (
    <FullScreen>

      <HeaderForAbout />

      <AboutCard>
          <Text style={styles.text} >x1Cars Co</Text>
          <Text style={styles.text} >versão 1.0</Text>
          <View style={styles.text2}>
            <Text style={styles.text} >Desenvolvido por:</Text>
            <Text style={styles.text} >Gustavo Santos Schneider</Text>
            <Text style={styles.text} >github.com/gugsguga844/pdm-firstExam</Text>
          </View>
      </AboutCard>

    </FullScreen>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
  },
  text2: {
    marginTop: "40%",
  },
});
