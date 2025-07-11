import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from './src/screens/HomeScreen';
import ReportScreen from './src/screens/ReportScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DocentesSearchScreen from './src/screens/DocentesSearchScreen';
import DocenteDetailedScreen from './src/screens/DocenteDetailedScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabScreens() {
	return (
		<Tab.Navigator
		screenOptions={({ route }) => ({
			headerShown: false,
			tabBarShowLabel: false,
			tabBarStyle: {
			backgroundColor: '#F0F4F9',
			height: 60,
			},
			tabBarIcon: ({ color, size }) => {
			let iconName;
			if (route.name === "Home") iconName = "home";
			else if (route.name === "Report") iconName = "flag";
			else if (route.name === "DocentesSearch") iconName = "search";
			return <Icon name={iconName} size={size} color={color} />;
			},
			tabBarActiveTintColor: "#0D6EFD",
			tabBarInactiveTintColor: "gray",
		})}
		>
		<Tab.Screen name="Home" component={HomeScreen} />
		<Tab.Screen name="DocentesSearch" component={DocentesSearchScreen} />
		<Tab.Screen name="Report" component={ReportScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* Aqui a primeira tela é o Tab navigator */}
				<Stack.Screen
					name="Tabs"
					component={TabScreens}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="DocenteDetailedScreen" 
					component={DocenteDetailedScreen}
					options={{ headerStyle: {backgroundColor: "#F0F4F9"} }}
				/>
		
				{/* Outras telas do stack */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}