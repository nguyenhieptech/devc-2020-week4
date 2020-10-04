import React from 'react';
import CompleteScreen from "../screens/CompleteScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function CompleteTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Complete Screen" component={CompleteScreen} />
    </Stack.Navigator>
  );
}

export default CompleteTab;
