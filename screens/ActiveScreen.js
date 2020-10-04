import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/Styles'

export default function ActiveScreen() {
  return (
    <View style={styles.container}>
      <Text>Active Screen</Text>
    </View>
  )
}

ActiveScreen.navigationOptions = {
  title: 'Active',
}
