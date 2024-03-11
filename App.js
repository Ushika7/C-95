import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <DrawerNavigator/>
    </NavigationContainer>
  );
}

