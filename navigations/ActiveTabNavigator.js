import React from 'react';
import ActiveScreen from '../screens/ActiveScreen';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ActiveTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Active Screen" component={ActiveScreen} />
    </Stack.Navigator>
  );
}

export default ActiveTab;
