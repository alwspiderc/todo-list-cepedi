import { StyleSheet, Text, View } from 'react-native';
import { Filter } from './Filter';

export function Header({
	title,
	onPress
}: {
	title: string;
	onPress: () => void;
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
			<Filter onPress={onPress} />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 33,
		marginBottom: 20
	},
	text: {
		fontWeight: 'bold',
		fontSize: 16
	}
});
