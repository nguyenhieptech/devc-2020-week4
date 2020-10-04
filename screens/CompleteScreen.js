import React from 'react';
import { Text, View } from 'react-native';
import styles from "../styles/Styles"

export default function CompleteScreen() {
  return (
    <View style={styles.container}>
      <Text>Complete Screen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  header: null
};