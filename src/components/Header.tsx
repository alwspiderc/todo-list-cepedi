import { StyleSheet, Text, View } from 'react-native';
import { Filter } from './Filter';

export function Header({ title }: { title: string }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
			<Filter />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 30,
		marginBottom: 20
	},
	text: {
		fontWeight: 'bold',
		fontSize: 16
	}
});
