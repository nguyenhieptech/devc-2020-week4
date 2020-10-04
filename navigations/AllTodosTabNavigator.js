import React from 'react';
import AllTodosScreen from '../screens/AllTodosScreen';
import SingleTodoScreen from '../screens/SingleTodoScreen';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AllTodosTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Todos Screen" component={AllTodosScreen} />
      <Stack.Screen name="Single Todo Screen" component={SingleTodoScreen} />
    </Stack.Navigator>
  );
}

export default AllTodosTab;
