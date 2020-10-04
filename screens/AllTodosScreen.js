import React, { useState } from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import styles from '../styles/Styles';
import { TODOS } from '../utils/data.js';

function TodoItem(props) {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green',
  };

  const onLongPress = (todo) => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo)}
    >
      <Text style={styles.todoText}>
        {props.idx + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

export default function AllTodosScreen(props) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    setTimeout(() => {
      props.navigation.navigate('SingleTodoScreen', {
        updatedTodo: todo,
      });
    }, 1000);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          'http://theiphonewalls.com/wp-content/uploads/2013/11/Piano-Keys.jpg',
      }}
    >
      <KeyboardAvoidingView enabled behavior='padding'>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: '200%' }}>
            {TODOS.map((todo, idx) => {
              return (
                <TodoItem
                  key={todo.body}
                  todo={todo}
                  idx={idx}
                  onToggleTodo={onToggleTodo}
                  onDeleteTodo={onDeleteTodo}
                  onPress={onToggleTodo}
                />
              );
            })}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={todoBody}
              style={styles.todoInput}
              onChangeText={(text) => setTodoBody(text)}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

AllTodosScreen.navigationOptions = {
  title: 'All Todos',
};
