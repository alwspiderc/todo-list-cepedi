import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DetailsScreen, HomeScreen } from './src/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
	Home: undefined;
	Details: {
		id: number;
		name: string;
		description: string;
		checked: boolean;
	};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerShown: false
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Details" component={DetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}
