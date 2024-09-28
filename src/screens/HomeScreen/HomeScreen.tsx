import { ScrollView, Text, View } from 'react-native';
import { Card } from '../../components/Card/Card';

export function HomeScreen() {
	return (
		<ScrollView>
			<Text>Home Screen</Text>
			<Card />
		</ScrollView>
	);
}
