import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DetailsScreen, HomeScreen } from './src/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TaskData } from './src/components';
import { TaskProvider } from './src/context';

export type RootStackParamList = {
	Home: undefined;
	Details: {
		id: string;
		name: string;
		description: string;
		checked: boolean;
		setTasks: (tasks: TaskData[]) => void;
	};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<TaskProvider>
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
			</TaskProvider>
		</GestureHandlerRootView>
	);
}
