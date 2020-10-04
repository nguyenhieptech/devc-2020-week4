import React from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/Styles"

function SingleTodoScreen(props) {
  const { id, status, body } = props.navigation.state.params.updatedTodo;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {id}. {status}
      </Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
}

SingleTodoScreen.navigationOptions = {
  title: 'SingleTodoScreen'
};

export default SingleTodoScreen;