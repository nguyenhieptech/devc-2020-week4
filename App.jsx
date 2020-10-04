import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AllTodosTabNavigator from './navigations/AllTodosTabNavigator';
import ActiveTabNavigator from './navigations/ActiveTabNavigator';
import CompleteTabNavigator from './navigations/CompleteTabNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Complete') {
              iconName = focused ? 'ios-done-all' : 'ios-done-all';
            } else if (route.name === 'AllTodos') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Active') {
              iconName = focused ? 'ios-grid' : 'ios-grid';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='AllTodos' component={AllTodosTabNavigator} />
        <Tab.Screen name='Active' component={ActiveTabNavigator} />
        <Tab.Screen name='Complete' component={CompleteTabNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
