import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface props {
	title: string;
	onPress: () => void;
	style?: object;
}

export function Button({ title, onPress, style }: props) {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		borderRadius: 5,
		backgroundColor: '#011F26',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		color: '#F7F7F7',
		fontWeight: 'semibold',
		textTransform: 'uppercase'
	}
});
