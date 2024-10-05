import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface props {
	title: string;
	onPress: () => void;
	isValid?: boolean;
}

export function Button({ title, onPress, isValid }: props) {
	return (
		<TouchableOpacity
			style={[styles.container, !isValid && styles.containerDisabled]}
			onPress={onPress}
		>
			<Text style={[styles.text, !isValid && styles.textDisabled]}>
				{title}
			</Text>
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
	containerDisabled: {
		backgroundColor: '#B9B9B9'
	},
	text: {
		fontSize: 16,
		color: '#F7F7F7',
		fontWeight: 'semibold',
		textTransform: 'uppercase'
	},
	textDisabled: {
		color: '#F7F7F7'
	}
});
