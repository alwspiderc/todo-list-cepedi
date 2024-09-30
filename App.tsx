import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DetailsScreen, HomeScreen } from './src/screens';

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			{/* <HomeScreen /> */}
			<DetailsScreen />
		</GestureHandlerRootView>
	);
}
